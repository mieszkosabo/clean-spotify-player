import { fromJS } from "immutable";
import {
  INIT,
  UPDATE_PLAYER_DATA,
  SET_TOKEN,
  FETCH_DATA_ERROR
} from "./consts";
import { isNil } from "rambda";
import { getAuthToken } from "./utils";

export const MAIN_REDUCER = "MAIN_REDUCER";

const initialState = fromJS({
  token: null,
  item: {
    album: {
      images: [{ url: "" }]
    },
    name: "",
    artists: [{ name: "" }],
    duration_ms: 0
  },
  is_playing: "Paused",
  progress_ms: 0,
  no_data: false,
  loading: true
});

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      const token = action.payload;
      return isNil(token) ? state : state.set("token", token);
    }
    case UPDATE_PLAYER_DATA: {
      const data = action.payload.response;
      // Response is null when user doesn't play anything on spotify.
      return isNil(data)
        ? state.set("no_data", true).set("loading", false)
        : state
            .set("item", data.item) // tylko potrzebne rzeczy
            .set("is_playing", data.is_playing)
            .set("progress_ms", data.progress_ms)
            .set("no_data", false)
            .set("loading", false);
    }
    case FETCH_DATA_ERROR: {
      const error = action.payload;
      console.log(error);
      if (error.status === 401) {
        return state
          .set("token", null)
          .set("loading", true)
          .set("no_data", false);
      }
      return state;
    }
    default:
      return state;
  }
};
