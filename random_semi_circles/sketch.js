const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  const getPoints = () => {
    const points = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const u = i / (count - 1);
        const v = j / (count - 1);

        points.push({
          position: [u, v]
        });
      }
    }
    return points;
  };

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
