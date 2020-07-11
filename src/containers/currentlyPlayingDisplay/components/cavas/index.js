import React, { useEffect, useRef } from "react";
import { pixelize } from "./pixelize";
import { PIXEL_SIZE } from "./consts";

export const Canvas = ({ imgUrl }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    console.log("jestem tu");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d"); // dispach to redux
    const img = new Image();
    img.crossOrigin = "Anonimous";
    img.src = imgUrl;
    img.onload = () => {
      const imgWidth = img.width;
      const imgHeight = img.height;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      pixelize(PIXEL_SIZE, imgWidth, imgHeight, ctx); // change to constant
    };
  });

  return <canvas ref={canvasRef} />;
};
