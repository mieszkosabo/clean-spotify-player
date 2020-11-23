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
import { SongTitle } from "./components/songTitle";
import { Artist } from "./components/artist";
import { Line } from "rc-progress";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { theme, prop } from "styled-tools";
import { usePalette } from "react-palette";
import { defaultTo } from "rambda";
import { COVER_SIZE } from "./components/cavas/consts";

const StyledProgressLine = styled(Line)`
  width: ${COVER_SIZE - 180}px;
  height: calc(min(2vh, 2vw) / 2);
  margin-bottom: 40px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1920px;
    align-items: center;
    height: 1080px;
    background-color: ${prop('color', theme("colors.background"))};
`;

export const LeftPart = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    align-items: center;
    height: 1080px;
`;

export const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    align-items: center;
    height: 1080px;
`;

export const CurrentlyPlayingDisplay = () => {
  const albumCover = useSelector(albumCoverSelector);
  const songName = useSelector(songNameSelector);
  const artist = useSelector(artistSelector);
  const progress = useSelector(progressSelector);
  const duration = useSelector(durationSelector);
  const theme = useTheme();
  const { data } = usePalette(albumCover);

  return (
    <Container color={data.darkMuted}>
      <LeftPart>
        <Canvas imgUrl={albumCover} />
      </LeftPart>
      <RightPart>
      <SongTitle title={songName} />     
      <StyledProgressLine
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
