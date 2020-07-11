const getAverageRGB = imgData => {
  var red = 0;
  var green = 0;
  var blue = 0;
  var total = 0;

  for (var i = 0; i < imgData.length; i += 4) {
    if (imgData[i + 3] !== 0) {
      red += imgData[i + 0];
      green += imgData[i + 1];
      blue += imgData[i + 2];
      total++;
    }
  }

  var avgRed = Math.floor(red / total);
  var avgGreen = Math.floor(green / total);
  var avgBlue = Math.floor(blue / total);

  return "rgba(" + avgRed + "," + avgGreen + "," + avgBlue + ", 1)";
};

export const pixelize = (size, imgWidth, imgHeight, ctx) => {
  for (let x = 0; x < imgWidth; x += size) {
    for (let y = 0; y < imgHeight; y += size) {
      const pixels = ctx.getImageData(x, y, size, size);
      const averageRGBA = getAverageRGB(pixels.data);
      ctx.fillStyle = averageRGBA;
      ctx.fillRect(x, y, size, size);
    }
  }
};
