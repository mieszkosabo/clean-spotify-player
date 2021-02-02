import React from "react";
import { TitleWrapper } from "./titleWrapper";

export const SongTitle = ({ title, vertical }) => (
  <TitleWrapper vertical={vertical}>{title}</TitleWrapper>
);
