const canvasSketch = require("canvas-sketch");
const palettes = require("nice-color-palettes");
const random = require("canvas-sketch-util/random");
const { lerp } = require("canvas-sketch-util/math");
const settings = {
  dimensions: "A4",
  pixelsPerInch: 300,
  orientation: "landscape",
  units: "in"
};

const sketch = () => {
  const palette = random.shuffle(random.pick(palettes));
  const randomRectangles = () => {
    const points = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const u = i / (count - 1);
        const v = j / (count - 1);
        points.push({
          position: [u, v],
          color: random.pick(palette)
        });
      }
    }
    return points;
  };

  const points = randomRectangles();
  console.log(points);
  const margin = 16;
  return ({ context, width, height }) => {
    context.fillStyle = "#e3d4bfe3";
    context.fillRect(0, 0, width, height);

    // create the random rectabgles here
    points.forEach(data => {
      const { position, color } = data;
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.globalAlpha = random.value();

      if (random.value() > 0.8 && random.value() < 0.9) {
        context.rect(x, y, random.range(0.1, 1), random.range(0.1, 1.3));
      }
      if (random.value() > 0.3 && random.value() < 0.5) {
        context.rect(x, y, random.range(0, 0.1), random.range(0.1, 0.15));
      }
      if (random.value() < 0.3) {
        context.rect(x, y, random.range(0, 0.05), random.range(0, 0.05));
      }
      if (random.value() > 0.98) {
        context.rect(x, y, random.range(1, 2), random.range(6, 10));
      }

      context.fillStyle = color;
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
