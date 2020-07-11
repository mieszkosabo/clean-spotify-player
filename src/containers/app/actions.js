import { INIT, UPDATE_PLAYER_DATA, FETCH_DATA } from "./consts";

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
