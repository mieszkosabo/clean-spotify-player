import { INIT, UPDATE_PLAYER_DATA } from "./consts";

export const init = () => ({
  type: INIT
});

export const updateData = data => ({
  type: UPDATE_PLAYER_DATA,
  payload: data
});
