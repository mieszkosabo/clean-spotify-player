import { combineEpics } from "redux-observable";
import {
  mainEpics
} from "./containers/app/epic";

export const rootEpic = combineEpics(
  mainEpics
);
