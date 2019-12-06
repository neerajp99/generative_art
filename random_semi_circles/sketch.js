const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  const colorCount = random.rangeFloor(1, 20);
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);
  console.log(palette);
  const getPoints = () => {
    const points = [];
    const count = 10;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const u = i / (count - 1);
        const v = j / (count - 1);

        points.push({
          position: [u, v],
          color: palette
        });
      }
    }
    return points;
  };

  const points = getPoints();
  console.log(points);
  const margin = 150;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 0.5;

    // console.log(a, b, c, d);
    //

    points.forEach(data => {
      const { position, color } = data;
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      // context.beginPath();
      // context.globalAlpha = 0.7
      // context.arc(x, y, random.range(12, 22), Math.PI * 2, false);
      // context.fillStyle = "#00000";
      // context.fill();
      // context.strokeStyle = "red";
      // context.lineWidth = 5;
      // context.stroke();

      let a = random.range(0, 0.5);
      let b = random.range(a, 1.5);
      const c = random.range(a, a + 1);
      const d = random.range(b, b + 1);
      const k = random.range(30, 50)
      context.beginPath();
      context.arc(x, y, k, a * Math.PI, b * Math.PI);
      context.fillStyle = random.pick(color);
      context.fill();
      context.beginPath();
      context.arc(x, y, k, b * Math.PI, a * Math.PI);
      context.fillStyle = random.pick(color);
      context.fill();
      context.beginPath();
      context.arc(x, y, k, c * Math.PI, d * Math.PI);
      context.fillStyle = random.pick(color);
      context.fill();
      context.beginPath();
      context.arc(x, y, k, d * Math.PI, c * Math.PI);
      context.fillStyle = random.pick(color);
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
