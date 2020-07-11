import React, { useEffect, useRef } from "react";
import { Canvas } from "./components/cavas";
import { itemSelector } from "../app/selectors";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { SongTitle } from "./components/songTitle";

export const CurrentlyPlayingDisplay = () => {
  const item = useSelector(itemSelector);
  console.log(item);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Canvas imgUrl={item.album.images[0].url} />
        </Col>
        <Col>
          <SongTitle title={item.name} />
        </Col>
      </Row>
    </Container>
  );
};
