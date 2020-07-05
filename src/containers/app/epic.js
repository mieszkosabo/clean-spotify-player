import { INIT } from "./consts";
import { mergeMap, map, catchError, takeUntil, filter } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of, interval } from "rxjs";
import { ofType } from "redux-observable";
import { prop, isNil } from "rambda";
import { MAIN_REDUCER } from "./reducer";
import { updateData } from "./actions";

export const playerDataEpic = (action$, state$) => {
  const token = prop(MAIN_REDUCER)(state$.value).get("token");
  console.log("token", token);
  console.log("epic", action$.type);
  return action$.pipe(
    ofType(INIT),
    filter(() => !isNil(prop(MAIN_REDUCER)(state$.value).get("token"))),
    mergeMap(() =>
      ajax({
        url: "https://api.spotify.com/v1/me/player",
        type: "GET",
        headers: {
          Authorization:
            "Bearer " + prop(MAIN_REDUCER)(state$.value).get("token")
        }
      }).pipe(
        map(response => updateData(response))
        //catchError(error => of(fetchWeatherRejected(error))),
        //takeUntil(action$.pipe(ofType(WEATHER_READY)))
      )
    )
  );
};
