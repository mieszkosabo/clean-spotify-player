import {
  INIT,
  FETCH_DATA,
  UPDATE_PLAYER_DATA,
  PROGRESS_EVERY_MS,
  SET_REFRESH_TOKEN,
  REFRESH_TOKEN,
  REFRESH_INTERVAL,
} from "./consts";
import { mergeMap, map, filter, catchError, takeUntil, switchMap, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { interval, of, from } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { isNil } from "ramda";
import {
  updateData,
  fetchData,
  fetchDataError,
  progressSmoothly,
  refreshTokenAction,
  setAccessToken,
  setRefreshToken,
} from "./actions";
import { tokenSelector, isPlayingSelector, refreshTokenSelector } from "./selectors";
import axios from 'axios'

const updateDataEveryIntervalEpic = action$ =>
  action$.pipe(
    ofType(INIT),
    mergeMap(() =>
      interval(5000).pipe(
        map(() => fetchData())
        //takeUntil(action$.pipe(ofType()))
      )
    )
  );

const smoothStatusBarEpic = (action$, state$) =>
  action$.pipe(
    ofType(UPDATE_PLAYER_DATA),
    filter(() => isPlayingSelector(state$.value)),
    mergeMap(() =>
      interval(PROGRESS_EVERY_MS).pipe(
        map(() => progressSmoothly(PROGRESS_EVERY_MS)),
        takeUntil(action$.pipe(ofType(UPDATE_PLAYER_DATA)))
      )
    )
  );

const playerDataEpic = (action$, state$) =>
  action$.pipe(
    ofType(INIT, FETCH_DATA),
    filter(() => !isNil(tokenSelector(state$.value))),
    mergeMap(() =>
      ajax({
        url: "https://api.spotify.com/v1/me/player",
        type: "GET",
        headers: {
          Authorization: "Bearer " + tokenSelector(state$.value)
        }
      }).pipe(
        map(response => updateData(response)),
        catchError(error => of(fetchDataError(error)))
      )
    )
  );

const initRefreshTokenEpic = (action$) =>
    action$.pipe(
      ofType(SET_REFRESH_TOKEN),
      switchMap(() =>
        interval(REFRESH_INTERVAL).pipe(
          map(() => refreshTokenAction())
        )
      )
    );

const refreshTokenEpic = (action$, state$) =>
action$.pipe(
  ofType(REFRESH_TOKEN),
  switchMap(() => from(axios.get('http://localhost:4000/refresh_token',
  {
    params: {
      refresh_token: refreshTokenSelector(state$.value)
    }
  })).pipe(
    map((data) => {
      const { access_token, refresh_token } = data.data;
      return ({access_token, refresh_token});
    }),
    tap(console.log),
    catchError((error) => of(({type: error}))),
    mergeMap(({access_token, refresh_token}) => [setAccessToken(access_token), setRefreshToken(refresh_token)])
  ))
);

export const mainEpics = combineEpics(
  refreshTokenEpic,
  initRefreshTokenEpic,
  playerDataEpic,
  //smoothStatusBarEpic,
  updateDataEveryIntervalEpic
)