const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: "A4",
  orientation: "potrait"
};

const sketch = () => {
  bezierCurve = (points, x = 0.5, y = 0.8, context) => {
    context.beginPath();
    // Move to the initial position
    context.moveTo(points[0].x, points[0].y);

    let curvePointX = 0,
      curvePointY = 0,
      slope = 0,
      initialPoint = points[0],
      curvePointX2,
      curvePointY2,
      point;

    // Loop over
    for (let i = 0; i < points.length; i++) {
      let currentPoint = points[i];
      let nextPoint = points[i + 1];

      if (nextPoint) {
        slope = (nextPoint.y - initialPoint.y) / (nextPoint.x - initialPoint.x);
        curvePointX2 = (nextPoint.x - currentPoint.x) * -x;
        curvePointY2 = curvePointX2 * slope * y;
      } else {
        curevPointX2 = 0;
        curvePointY2 = 0;
      }
      context.bezierCurveTo(
        initialPoint.x - curvePointX,
        initialPoint.y - curvePointY,
        currentPoint.x + curvePointX2,
        currentPoint.y + curvePointY2,
        currentPoint.x,
        currentPoint.y
      );
      curvePointX = curvePointX2;
      curvePointY = curvePointY2;
      initialPoint = currentPoint;
    }
    context.stroke();
  };

  // function to generate random data points

  let finalLines = [];
  let lines = [];
  for (let j = 0; j < 1200; j += 25) {
    lines = [];

    let X = 50;
    let widthX = 20;
    for (let i = 0; i < 100; i++) {
      let Y = j + Math.floor(Math.random() * 20 + 25);
      // console.log(Y)
      if (X < 570) {
        point = {
          x: X,
          y: Y
        };
      }

      lines.push(point);

      X = X + widthX;
    }
    finalLines.push(lines);
  }
  console.log(finalLines);

  return ({ context, width, height }) => {
    console.log(width);
    context.fillStyle = "#04383f";
    context.fillRect(0, 0, width, height);
    context.beginPath();
    context.setLineDash([0]);
    context.lineWidth = 1;
    // Add random colors from the palette
    const colorCount = random.rangeFloor(1, 20);
    const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);

    for (let i = 0; i < 32; i++) {
      const p = random.pick(palette);
      context.strokeStyle = p;
      bezierCurve(finalLines[i], 0.3, 1, context);
    }
  };
};

canvasSketch(sketch, settings);
