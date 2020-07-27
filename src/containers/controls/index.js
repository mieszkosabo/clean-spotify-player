import React from "react";
import { Skip } from "./components/skip";
import { PlayPause } from "./components/playpause";
import { isPlayingSelector } from "../app/selectors";
import { useSelector, useDispatch } from "react-redux";
import { tryPlayPause, trySkipForward, trySkipBack } from "../app/actions";

const playImg = require("../../assets/play.png");
const pauseImg = require("../../assets/pause.png");
const skip_forward = require("../../assets/skip_forward.png");
const skip_back = require("../../assets/skip_back.png");

export const Controls = () => {
  const is_playing = useSelector(isPlayingSelector);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <Skip
        src={skip_back}
        alt={"prev"}
        onClick={() => dispatch(trySkipBack())}
      />
      <PlayPause
        src={is_playing ? pauseImg : playImg}
        alt="Play"
        onClick={() => dispatch(tryPlayPause(is_playing ? "pause" : "play"))}
      />
      <Skip
        src={skip_forward}
        alt={"next"}
        onClick={() => dispatch(trySkipForward())}
      />
    </div>
  );
};
