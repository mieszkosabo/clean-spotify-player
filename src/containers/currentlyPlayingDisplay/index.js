import React from "react";
import { Canvas } from "./components/cavas";
import {
  songNameSelector,
  albumCoverSelector,
  artistSelector,
  progressSelector,
  durationSelector
} from "../app/selectors";
import { useSelector } from "react-redux";
import useMeasure from 'react-use-measure'
import { SongTitle } from "./components/songTitle";
import { Artist } from "./components/artist";
import { useTheme } from "styled-components";
import { usePalette } from "react-palette";
import { defaultTo } from "ramda";
import { ProgressLine } from "./components/ProgressLine";
import { RightPart } from "./components/layout/RightPart";
import { LeftPart } from "./components/layout/LeftPart";
import { Container } from "./components/layout/Container";

export const CurrentlyPlayingDisplay = () => {
  const albumCover = useSelector(albumCoverSelector);
  const songName = useSelector(songNameSelector);
  const artist = useSelector(artistSelector);
  const progress = useSelector(progressSelector);
  const duration = useSelector(durationSelector);
  const theme = useTheme();
  const { data } = usePalette(albumCover);
  const [ref, bounds] = useMeasure();
  const canvasSize = Math.min(bounds.width / 2, bounds.height) * 0.9;

  return (
    <Container ref={ref} color={data.darkMuted}>
      <LeftPart>
        <Canvas imgUrl={albumCover} size={canvasSize} />
      </LeftPart>
      <RightPart>
        <SongTitle title={songName} />

        <ProgressLine
          percent={(progress / duration) * 100}
          strokeColor={defaultTo(theme.colors.progressFront, data.vibrant)}
          trailColor={defaultTo(theme.colors.progressFront, data.darkVibrant)}
          strokeWidth={2}
          trailWidth={2}
        />

        <Artist name={artist} />
      </RightPart>
    </Container>
  )
};
