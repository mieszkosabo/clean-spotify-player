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

export const songNameSelector = createSelector(getMainData, state =>
  state.get("song_name")
);

export const albumCoverSelector = createSelector(getMainData, state =>
  state.get("album_cover")
);

export const isPlayingSelector = createSelector(getMainData, state =>
  state.get("is_playing")
);

export const progressSelector = createSelector(getMainData, state =>
  state.get("progress_ms")
);

export const durationSelector = createSelector(getMainData, state =>
  state.get("duration_ms")
);

export const loadingSelector = createSelector(getMainData, state =>
  state.get("loading")
);

export const artistSelector = createSelector(getMainData, state =>
  state.get("artist")
);
