import React, { useEffect, useRef } from "react";
import { Canvas } from "./components/cavas";
import { itemSelector } from "../app/selectors";
import { useSelector } from "react-redux";

export const CurrentlyPlayingDisplay = () => {
  const item = useSelector(itemSelector);
  console.log(item);

  return <Canvas imgUrl={item.album.images[0].url} />;
};
