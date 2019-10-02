const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  const palette = random.pick(palettes);
  console.log(palette);

  const createGrid = () => {
    const points = [];
    const count = 30;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / (count - 1);
        const v = y / (count - 1);
        points.push({
          radius: Math.abs(random.gaussian() * 0.01),
          position: [u, v],
          color: random.pick(palette)
        });
      }
    }
    return points;
  };

  // random.setSeed(333999);
  const points = createGrid().filter(() => random.value() > 0.5);
  console.log(points);
  const margin = 100;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    points.forEach(data => {
      // const x = u * width;
      // const y = v * height;
      // linear interpolation
      const { position, radius, color } = data;

      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      context.beginPath();
      context.arc(x, y, 20, Math.PI * 2, false);
      context.fillStyle = color;
      context.fill();
      context.strokeStyle = color;
      context.lineWidth = 5;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
