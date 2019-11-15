const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
// const palettes = require("nice-color-palettes");

const settings = {
  dimensions: "A4",
  units: "in",
  orientation: "potrait",
  pixelsPerInch: 200
};

const sketch = () => {
  const getCircles = () => {
    const points2 = [];
    const count2 = 700;

    for (let i = 0; i < count2; i++) {
      for (let j = 0; j < count2; j++) {
        const a = i / (count2 - 1);
        const b = j / (count2 - 1);
        points2.push({
          positionNew: [a, b]
        });
      }
    }

    return points2;
  };
  const getPoints = () => {
    const points = [];
    const count = 650;
    const count2 = 700;
    const count3 = 800;

    for (let x = 0; x < count; x++) {
      const u = x / (count - 1);
      const v = x / (count2 - 1);
      const z = x / (count3 - 1);

      // const v = y / (count - 1);
      points.push({
        position: [u],
        position2: [v],
        position3: [z],
        randomPoints: random.value(),
        randomPoints2: random.value()
      });
    }
    return points;
  };

  const points = getPoints();
  const points2 = getCircles().filter(() => random.value() > 0.994);
  const palette = ["#d2caad", "#70726f"];
  const pallett = random.pick(palette);

  console.log(points2);
  const margin = 9;
  const margin2 = 12;

  return ({ context, width, height }) => {
    let gradient_fill = context.createLinearGradient(0, 0, 0, 270);
    gradient_fill.addColorStop(0, "#FCF7DD");

    context.fillStyle = gradient_fill;
    context.fillRect(0, 0, width, height);

    // sketch goes here
    points.forEach((data, index) => {
      const { position } = data;

      const [u] = position;
      const x = lerp(margin, width - margin, u);
      // console.log(x)
      if (index % 2 == 0) {
        context.beginPath();
        context.globalAlpha = 0.2;
        context.rect(x, 0, 0.02, height);
        context.fillStyle = "black";

        context.fill();
      }
    });

    points.forEach((data, index) => {
      const { position2, randomPoints } = data;
      // console.log(Math.abs(randomPoints))
      const [u] = position2;
      const x = lerp(margin2, width - margin2, u);
      context.beginPath();
      context.globalAlpha = random.range(0, 0.2);
      context.rect(x, height, 0.08, -(randomPoints * 11));
      context.fillStyle = "#3c404c";
      context.fill();
    });

    points.forEach((data, index) => {
      const { position3, randomPoints2 } = data;
      // console.log(Math.abs(randomPoints))
      const [u] = position3;
      const x = lerp(margin2, width - margin2, u);
      context.beginPath();
      context.globalAlpha = random.range(0, 0.4);
      context.rect(x, height, 0.1, -(randomPoints2 * 8));
      context.fillStyle = "#3c404c";
      context.fill();
    });
    points.forEach((data, index) => {
      const { position3, randomPoints2 } = data;
      // console.log(Math.abs(randomPoints))
      const [u] = position3;
      const x = lerp(margin2, width - margin2, u);
      context.beginPath();
      context.globalAlpha = random.range(0, 0.2);
      context.rect(x, height, 0.05, -(randomPoints2 * 9));
      context.fillStyle = "#3c404c";
      context.fill();
    });
    // points.forEach((data, index) => {
    //   const { position3, randomPoints2 } = data;
    //   // console.log(Math.abs(randomPoints))
    //   const [u] = position3;
    //   const x = lerp(margin2, width - margin2, u);
    //   context.beginPath();
    //   context.globalAlpha = random.range(0, 0.2);
    //   context.rect(x, height, 0.05, -(randomPoints2 * 14));
    //   context.fillStyle = "#232c3f";
    //   context.fill();
    // });

    // Draw circles
    points2.forEach((data, index) => {
      const { positionNew } = data;
      const [u, v] = positionNew;
      const x = lerp(15, width - margin, u);
      const y = lerp(15, width - margin, v);
      if (index / 2 !== 0) {
        context.beginPath();
        context.arc(x, y, 0.03, Math.PI * 2, false);
        context.fillStyle = pallett;
        context.fill();
      }
    });
  };
};

canvasSketch(sketch, settings);
