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
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export const CurrentlyPlayingDisplay = () => {
  const albumCover = useSelector(albumCoverSelector);
  const songName = useSelector(songNameSelector);
  const artist = useSelector(artistSelector);
  const progress = useSelector(progressSelector);
  const duration = useSelector(durationSelector);
  const theme = useTheme();
  console.log(progress / duration);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Canvas imgUrl={albumCover} />
          <Line
            percent={(progress / duration) * 100}
            strokeColor={theme.colors.progressFront}
            trailColor={theme.colors.progressBack}
          />
        </Col>
        <Col>
          <SongTitle title={songName} />
          <Artist name={artist} />
        </Col>
      </Row>
    </Container>
  );
};
