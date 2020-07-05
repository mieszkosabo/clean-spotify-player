import { INIT } from "./consts";
import { mergeMap, map, catchError, takeUntil, filter } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of, interval } from "rxjs";
import { ofType } from "redux-observable";
import { isNil } from "rambda";
import { updateData } from "./actions";
import { tokenSelector } from "./selectors";

export const playerDataEpic = (action$, state$) => {
  return action$.pipe(
    ofType(INIT),
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
        //catchError(error => of(fetchWeatherRejected(error))),
        //takeUntil(action$.pipe(ofType(WEATHER_READY)))
      )
    )
  );
};
