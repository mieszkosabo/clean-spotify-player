import React from "react";
import { PlayPauseWrapper } from "./playPauseWrapper";

export const PlayPause = ({ src, alt, onClick }) => (
  <PlayPauseWrapper src={src} alt={alt} onClick={onClick} />
);
