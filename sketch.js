const canvasSketch = require("canvas-sketch");

const settings = {
  // dimensions: [2048, 2048]
  dimensions: "A4",
  units: "in",
  orientation: "potrait",
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    console.log(width, height);
    context.fillStyle = "red";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.1, 0, Math.PI * 2, false);
    context.fillStyle = "blue";
    context.fill();
    context.lineWidth = width * 0.02;
    context.strokeStyle = "green";
    context.stroke();
  };
};

canvasSketch(sketch, settings);

// 503068
