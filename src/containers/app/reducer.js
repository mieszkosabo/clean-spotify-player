import { fromJS } from "immutable";
import {
  UPDATE_PLAYER_DATA,
  FETCH_DATA_ERROR,
  SMOOTH_PROGRESS,
  SET_REFRESH_TOKEN,
  SET_ACCESS_TOKEN,
  SET_LOADING,
  SET_VIBRANT_MODE
} from "./consts";
import { isNil } from "ramda";

export const MAIN_REDUCER = "MAIN_REDUCER";

const initialState = fromJS({
  accessToken: null,
  refreshToken: null,
  album_cover: "",
  duration_ms: 0,
  artist: "",
  song_name: "",
  is_playing: "Paused",
  progress_ms: 0,
  no_data: true,
  loading: false,
  notPlaying: false,
  vibrantMode: false
});

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return state.set('loading', true);
    }
    case SET_ACCESS_TOKEN: {
      const { accessToken } = action;
      return isNil(accessToken)
      ? state
      : state.set('accessToken', accessToken);
    }
    case SET_REFRESH_TOKEN: {
      const { refreshToken } = action;
      return isNil(refreshToken)
        ? state
        : state.set('refreshToken', refreshToken);
    }
    case UPDATE_PLAYER_DATA: {
      const data = action.payload.response;
      return isNil(data) || isNil(data.item)
        ? state.set("no_data", true).set("loading", false).set('notPlaying', true)
        : state
            .set("song_name", data.item.name)
            .set("artist", data.item.artists[0].name)
            .set("duration_ms", data.item.duration_ms)
            .set("is_playing", data.is_playing)
            .set("progress_ms", data.progress_ms)
            .set("album_cover", data.item.album.images[0].url)
            .set("no_data", false)
            .set("loading", false)
            .set('notPlaying', false);
    }
    case FETCH_DATA_ERROR: {
      const error = action.payload;
      console.log(error);
      // session expired
      if (error.status === 401) {
        window.location.assign('/');
      }
      return state
        .set("token", null)
        .set("loading", true)
        .set("no_data", false);
    }
    case SMOOTH_PROGRESS: {
      const currTime = state.get("progress_ms");
      return state.set("progress_ms", currTime + action.payload);
    }
    case SET_VIBRANT_MODE: {
      const { value } = action;
      return state.set('vibrantMode', value);
    }
    default:
      return state;
  }
};
