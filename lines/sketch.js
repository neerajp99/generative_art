const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: "A4",
  units: "in",
  orientation: "potrait",
  pixelsPerInch: 200
};

const sketch = () => {
  const colorCount = random.rangeFloor(1, 5);
  const palette = random.shuffle(random.pick(palettes));
  const values = [0.5, -0.5];
  // create grid for point base point
  const createGrid = () => {
    const points = [];
    const count = 40;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / (count - 1);
        const v = y / (count - 1);
        points.push({
          position: [u, v],
          color: random.pick(palette),
          value: values,
          rotation: random.noise2D(u, v)
        });
      }
    }
    return points;
  };

  const points = createGrid();
  console.log(points);
  const margin = 15;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    points.forEach(data => {
      const { position, color, value, rotation } = data;
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      // context.beginPath();
      //
      // context.arc(x, y, 0.022, Math.PI * 2, false)
      //
      // context.strokeStyle = color;
      // let k = random.pick(value);
      // context.moveTo(x, y);
      // context.lineTo(x + 0.5, y + 0.5);
      // context.stroke();
      // context.lineWidth = width * 0.005;
      context.save()
      context.fillStyle = color;
      context.font = `${Math.abs(random.noise2D(x, y)) * 0.5 * width}px "Arial" `
      context.translate(x, y)
      context.rotate(rotation)
      context.fillText('-', 0, 0)

      context.restore()
    });
  };
};

canvasSketch(sketch, settings);
