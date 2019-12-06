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
    const count = 30;
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
  const margin = 100;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 0.6;

    // console.log(a, b, c, d);
    //

    points.forEach(data => {
      const { position, color } = data;
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      const colorCounts = random.rangeFloor(1, 10);
      const palett = random
        .shuffle(random.pick(palettes))
        .slice(0, colorCounts);

      // context.beginPath();
      // context.globalAlpha = 0.7
      // context.arc(x, y, random.range(12, 22), Math.PI * 2, false);
      // context.fillStyle = "#00000";
      // context.fill();
      // context.strokeStyle = "red";
      // context.lineWidth = 5;
      // context.stroke();

      let a = random.range(0, 0.6);
      let b = random.range(a + 0.4, 1.3);

      let c = random.range(a, b);
      if (c - a < 0.2) {
        c += 0.1;
      }
      if (c + 1 < b) {
        c += b + 0.1;
      }
      const news = ["#599b52", "#0625d9", "#f93d01"];
      const l = random.shuffle(news);
      // const d = random.range(c, b + 1);
      const k = random.range(15, 30);
      context.beginPath();
      context.arc(x, y, k, a * Math.PI, b * Math.PI);
      context.fillStyle = l[0];
      context.fill();
      context.beginPath();
      context.arc(x, y, k, b * Math.PI, a * Math.PI);
      context.fillStyle = l[1];
      context.fill();
      context.beginPath();
      context.arc(x, y, k, c * Math.PI, (c + 1) * Math.PI);
      context.fillStyle = l[2];
      context.fill();
      // context.beginPath();
      // context.arc(x, y, k, (c+0.7) * Math.PI, c * Math.PI);
      // context.fillStyle = "red";
      // context.fill();
    });
  };
};

canvasSketch(sketch, settings);
