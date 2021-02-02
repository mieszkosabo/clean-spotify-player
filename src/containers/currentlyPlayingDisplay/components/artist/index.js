import React from "react";
import { ArtistWrapper } from "./artistWrapper";

export const Artist = ({ name, vertical }) => <ArtistWrapper vertical={vertical}>{name}</ArtistWrapper>;
