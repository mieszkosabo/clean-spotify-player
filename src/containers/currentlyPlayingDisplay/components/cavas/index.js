import React, { useEffect, useRef } from "react";
import { CanvasWrapper } from "./canvasWrapper";
import { COVER_SIZE } from "./consts";

export const Canvas = ({ imgUrl }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = COVER_SIZE;
    canvas.height = COVER_SIZE;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonimous";
    img.src = imgUrl;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, COVER_SIZE, COVER_SIZE);
    };
  }, [imgUrl]);

  return <CanvasWrapper ref={canvasRef} />;
};
