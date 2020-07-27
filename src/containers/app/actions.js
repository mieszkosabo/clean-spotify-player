import {
  INIT,
  UPDATE_PLAYER_DATA,
  FETCH_DATA,
  SET_TOKEN,
  FETCH_DATA_ERROR,
  SMOOTH_PROGRESS,
  PLAYPAUSE,
  TRY_PLAYPAUSE,
  PLAYPAUSE_ERROR,
  SKIPBACK,
  SKIPFORWARD
} from "./consts";

export const init = () => ({
  type: INIT
});

export const updateData = data => ({
  type: UPDATE_PLAYER_DATA,
  payload: data
});

export const fetchData = () => ({
  type: FETCH_DATA
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  payload: error
});

export const progressSmoothly = time => ({
  type: SMOOTH_PROGRESS,
  payload: time
});

export const playPause = () => ({
  type: PLAYPAUSE
});

export const tryPlayPause = action => ({
  type: TRY_PLAYPAUSE,
  payload: action
});

export const playPauseError = error => ({
  type: PLAYPAUSE_ERROR,
  payload: error
});

export const trySkipBack = () => ({
  type: SKIPBACK
});

export const trySkipForward = () => ({
  type: SKIPFORWARD
});
