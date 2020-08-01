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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SongTitle } from "./components/songTitle";
import { Artist } from "./components/artist";
import { Line } from "rc-progress";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { Controls } from "../controls";
import { theme } from "styled-tools";

const StyledProgressLine = styled(Line)`
  width: min(70vh, 80vw);
  margin-top: 12vh;
  margin-left: auto;
  margin-right: auto;
  height: min(2vh, 2vw);
  @media (max-width: ${theme("dims.minLandscapeWidthPx")}px) {
    margin-top: min(6vh, 6vw);
  }
`;

const ControlsRow = styled(Row)`
  text-align: "center";
  align-items: center;
  justify-content: center;
  margin-top: min(7vh, 7vw);
`;

const TextRow = styled(Row)`
  justify-content: center;
  @media (min-width: ${theme("dims.minLandscapeWidthPx")}px) {
    height: 50vh;
  }
`;

const CanvasRow = styled(Row)`
  @media (min-width: ${theme("dims.minLandscapeWidthPx")}px) {
    height: 80vh;
  }
`;

const ProgressBarRow = styled(Row)`
  @media (min-width: ${theme("dims.minLandscapeWidthPx")}px) {
    height: 20vh;
  }
`;

export const CurrentlyPlayingDisplay = () => {
  const albumCover = useSelector(albumCoverSelector);
  const songName = useSelector(songNameSelector);
  const artist = useSelector(artistSelector);
  const progress = useSelector(progressSelector);
  const duration = useSelector(durationSelector);
  const theme = useTheme();

  return (
    <Container fluid>
      <Row>
        <Col md={6} xs={12} sm={6}>
          <CanvasRow>
            <Canvas imgUrl={albumCover} />
          </CanvasRow>
          <ProgressBarRow>
            <StyledProgressLine
              percent={(progress / duration) * 100}
              strokeColor={theme.colors.progressFront}
              trailColor={theme.colors.progressBack}
              strokeWidth={2}
              trailWidth={2}
            />
          </ProgressBarRow>
        </Col>
        <Col md={6} xs={12} sm={6}>
          <TextRow>
            <SongTitle title={songName} />
            <Artist name={artist} />
          </TextRow>
          <ControlsRow>
            <Controls />
          </ControlsRow>
        </Col>
      </Row>
    </Container>
  );
};
