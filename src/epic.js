import { combineEpics } from "redux-observable";
import {
  playerDataEpic,
  updateDataEveryIntervalEpic,
  smoothStatusBarEpic,
  playPauseEpic,
  skipSongEpic
} from "./containers/app/epic";

export const rootEpic = combineEpics(
  playerDataEpic,
  updateDataEveryIntervalEpic,
  smoothStatusBarEpic,
  playPauseEpic,
  skipSongEpic
);
