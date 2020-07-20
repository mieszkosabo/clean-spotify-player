import {
  INIT,
  FETCH_DATA,
  PLAY,
  UPDATE_PLAYER_DATA,
  PROGRESS_EVERY_MS
} from "./consts";
import { mergeMap, map, filter, catchError, takeUntil } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { interval, of } from "rxjs";
import { ofType } from "redux-observable";
import { isNil } from "rambda";
import {
  updateData,
  fetchData,
  fetchDataError,
  progressSmoothly
} from "./actions";
import { tokenSelector, isPlayingSelector } from "./selectors";

export const updateDataEveryIntervalEpic = action$ =>
  action$.pipe(
    ofType(INIT),
    mergeMap(() =>
      interval(5000).pipe(
        map(() => fetchData())
        //takeUntil(action$.pipe(ofType()))
      )
    )
  );

export const smoothStatusBarEpic = (action$, state$) =>
  action$.pipe(
    ofType(PLAY, UPDATE_PLAYER_DATA),
    filter(() => isPlayingSelector(state$.value)),
    mergeMap(() =>
      interval(PROGRESS_EVERY_MS).pipe(
        map(() => progressSmoothly(PROGRESS_EVERY_MS)),
        takeUntil(action$.pipe(ofType(PLAY, UPDATE_PLAYER_DATA)))
      )
    )
  );

export const playerDataEpic = (action$, state$) =>
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
