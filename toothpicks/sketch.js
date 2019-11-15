const canvasSketch = require("canvas-sketch");
const palettes = require("nice-color-palettes");
const { lerp } = require("canvas-sketch-util/math");

const settings = {
  dimensions: "A4",
  orientation: "potrait",
  pixelsPerInch: 200
};

const sketch = () => {
  const length = 10;
  const margin = 100;

  // Linear interpolation of the tothpicks
  const u = lerp(width - margin, margin, 1.5);
  const v = lerp(height - margin, margin, 0.5);

  const tootpick = size => {
    // const ax, bx, ay, by

    const points = [];
  };

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
