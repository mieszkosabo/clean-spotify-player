import {
  INIT,
  FETCH_DATA,
  PLAYPAUSE,
  UPDATE_PLAYER_DATA,
  PROGRESS_EVERY_MS,
  SKIPBACK,
  SKIPFORWARD
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
  progressSmoothly,
  playPause,
  playPauseError
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
    ofType(UPDATE_PLAYER_DATA),
    filter(() => isPlayingSelector(state$.value)),
    mergeMap(() =>
      interval(PROGRESS_EVERY_MS).pipe(
        map(() => progressSmoothly(PROGRESS_EVERY_MS)),
        takeUntil(action$.pipe(ofType(UPDATE_PLAYER_DATA)))
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

export const playPauseEpic = (action$, state$) =>
  action$.pipe(
    ofType(PLAYPAUSE),
    mergeMap(action =>
      ajax({
        url: `https://api.spotify.com/v1/me/player/${action.payload}`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + tokenSelector(state$.value)
        }
      }).pipe(
        map(() => fetchData()),
        catchError(error => of(playPauseError(error)))
      )
    )
  );

export const skipSongEpic = (action$, state$) =>
  action$.pipe(
    ofType(SKIPBACK, SKIPFORWARD),
    mergeMap(action =>
      ajax({
        url: `https://api.spotify.com/v1/me/player/${
          action.type === SKIPBACK ? "previous" : "next"
        }`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + tokenSelector(state$.value)
        }
      }).pipe(
        map(() => fetchData()),
        catchError(error => of(playPauseError(error))) //FIXME: find better name
      )
    )
  );
