import React, { useEffect, useRef } from "react";
import { pixelize } from "./pixelize";
import { PIXEL_SIZE } from "./consts";
import { CanvasWrapper } from "./canvasWrapper";

export const COVER_SIZE = 860;

export const Canvas = ({ imgUrl }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonimous";
    img.src = imgUrl;
    img.onload = () => {
      const imgWidth = img.width;
      const imgHeight = img.height;
      canvas.width = COVER_SIZE;
      canvas.height = COVER_SIZE;
      console.log(img.width);
      ctx.drawImage(img, 0, 0, COVER_SIZE, COVER_SIZE);
      //pixelize(PIXEL_SIZE, imgWidth, imgHeight, ctx);
    };
  }, [imgUrl]);

  return <CanvasWrapper ref={canvasRef} />;
};
