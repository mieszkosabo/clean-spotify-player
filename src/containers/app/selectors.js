import { createSelector } from "reselect";
import { prop } from "rambda";
import { MAIN_REDUCER } from "./reducer";

const getMainData = prop(MAIN_REDUCER);

export const tokenSelector = createSelector(getMainData, state =>
  state.get("token")
);

export const noDataSelector = createSelector(getMainData, state =>
  state.get("no_data")
);

export const itemSelector = createSelector(getMainData, state =>
  state.get("item")
);

export const isPlayingSelector = createSelector(getMainData, state =>
  state.get("is_playing")
);

export const progressSelector = createSelector(getMainData, state =>
  state.get("progress_ms")
);
