import React from "react";
import { TitleWrapper } from "./titleWrapper";

export const SongTitle = ({ title }) => (
  <TitleWrapper titleLength={title.length}>{title}</TitleWrapper>
);
