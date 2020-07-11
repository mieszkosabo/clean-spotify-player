import { combineEpics } from "redux-observable";
import {
  playerDataEpic,
  updateDataEveryIntervalEpic
} from "./containers/app/epic";

export const rootEpic = combineEpics(
  playerDataEpic,
  updateDataEveryIntervalEpic
);
