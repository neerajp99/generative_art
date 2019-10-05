const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  const colorCount = random.rangeFloor(1, 6)
  const palette = random.shuffle(random.pick(palettes));
  console.log(palette);

  const createGrid = () => {
    const points = [];
    const count = 50;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / (count - 1);
        const v = y / (count - 1);
        const radius = Math.abs(random.noise2D(u, v)) * 0.2 ;
        points.push({
          radius,
          position: [u, v],
          color: random.pick(palette),
          rotation: random.noise2D(u, v),
        });
      }
    }
    return points;
  };

  const points = createGrid().filter(() => random.value() > 0.3);
  console.log(points);
  const margin = 100;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    points.forEach(data => {
      // const x = u * width;
      // const y = v * height;
      // linear interpolation
      const { position, radius, color, rotation } = data;

      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      // context.beginPath();
      // context.arc(x, y, radius * width, Math.PI * 2, false);
      // context.fillStyle = color;
      // context.fill();
      // context.strokeStyle = color;
      // context.lineWidth = 5;
      // context.stroke();
      context.save()
      context.fillStyle = color;
      context.font = `${radius * width}px "Arial" `
      context.translate(x, y)
      context.rotate(rotation)
      context.fillText('=', 0, 0)
      context.restore()


    });
  };
};

canvasSketch(sketch, settings);
