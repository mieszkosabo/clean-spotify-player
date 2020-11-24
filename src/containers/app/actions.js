import {
  INIT,
  UPDATE_PLAYER_DATA,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  SMOOTH_PROGRESS,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
  REFRESH_TOKEN
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

export const setAccessToken = (accessToken) => ({
  type: SET_ACCESS_TOKEN,
  accessToken
})

export const setRefreshToken = (refreshToken) => ({
  type: SET_REFRESH_TOKEN,
  refreshToken
})

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  payload: error
});

export const progressSmoothly = time => ({
  type: SMOOTH_PROGRESS,
  payload: time
});

export const refreshTokenAction = () => ({
  type: REFRESH_TOKEN
})