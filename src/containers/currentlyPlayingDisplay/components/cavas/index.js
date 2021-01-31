import React, { useEffect, useRef } from "react";
import { CanvasWrapper } from "./canvasWrapper";

export const Canvas = ({ imgUrl, size }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonimous";
    img.src = imgUrl;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
    };
  }, [imgUrl, size]);

  return <CanvasWrapper ref={canvasRef} />;
};
