import { combineEpics } from "redux-observable";
import { playerDataEpic } from "./containers/app/epic";

export const rootEpic = combineEpics(playerDataEpic);
