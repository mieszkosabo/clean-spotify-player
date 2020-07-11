import { INIT, FETCH_DATA } from "./consts";
import { mergeMap, map, filter } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { interval } from "rxjs";
import { ofType } from "redux-observable";
import { isNil } from "rambda";
import { updateData, fetchData } from "./actions";
import { tokenSelector } from "./selectors";

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
        map(response => updateData(response))
        //catchError(error => of(fetchWeatherRejected(error)))
      )
    )
  );
