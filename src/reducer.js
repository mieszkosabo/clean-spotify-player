import { combineReducers } from "redux";
import { mainReducer, MAIN_REDUCER } from "./containers/app/reducer";

export default function createReducer() {
  return combineReducers({
    [MAIN_REDUCER]: mainReducer
  });
}
