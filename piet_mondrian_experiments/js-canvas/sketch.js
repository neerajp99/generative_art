const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: [842, 842],
  orientation: "landscape"
  // units: "in",
  // pixelsPerInch: 200
};

const sketch = () => {
  const colorCount = random.rangeFloor(1, 4);
  const palette = random.shuffle(random.pick(palettes));

  return ({ context, width, height }) => {
    // console.log(height, width);
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = 10;

    let white = "#F2F5F1";
    let colors = ["#D40920", "#FFFFF", "#1356A2", "#FFFFF", "#F7D842", "#FFFFF", "#F2F5F1", "#F2F5F1", "#F2F5F1"];

    // Initial square object
    let squares = [
      {
        x: 0,
        y: 0,
        width: width,
        height: height
      }
    ];

    // Function that takes care of splitting
    const splitSquare = coordinates => {
      // Destructuring to get the x,y coordinates
      const { x, y } = coordinates;
      // Taking out elements out of the loop and
      // replacing with 2 squares
      // Backward looping restricts from further looping
      // console.log(squares.length);
      for (let i = squares.length - 1; i >= 0; i--) {
        const square = squares[i];
        // console.log(x, square.x, square.x + square.width);
        if (x && x > square.x && x < square.x + square.width) {
          if (Math.random() > 0.6) {
            squares.splice(i, 1);
            splitOnX(square, x);
          }
        }

        if (y && y > square.y && y < square.y + square.height) {
          if (Math.random() > 0.6) {
            squares.splice(i, 1);
            splitOnY(square, y);
          }
        }
      }
    };

    const splitOnX = (square, splitAt) => {
      let squareA = {
        x: square.x,
        y: square.y,
        width: square.width - (square.width - splitAt + square.x),
        height: square.height
      };

      let squareB = {
        x: splitAt,
        y: square.y,
        width: square.width - splitAt + square.x,
        height: square.height
      };
      squares.push(squareA);
      squares.push(squareB);
      // console.log(squares);
    };

    const splitOnY = (square, splitAt) => {
      let squareA = {
        x: square.x,
        y: square.y,
        width: square.width,
        height: square.height - (square.height - splitAt + square.y)
      };

      let squareB = {
        x: square.x,
        y: splitAt,
        width: square.width,
        height: square.height - splitAt + square.y
      };
      squares.push(squareA);
      squares.push(squareB);
      console.log(squares);
    };
    for (let i = 0; i < width; i += width / 8) {
      splitSquare({ x: i });
      splitSquare({ y: i });
    }

    let x = 0;
    for (let i = 0; i < colors.length; i++) {
      squares[Math.floor((Math.random() * squares.length/4))].color = colors[i];
    }

    // Loop over the length of the squares array and creating a rectangle
    for (let i = 0; i < squares.length; i++) {
      const color = random.pick(colors);
      context.beginPath();
      context.fillStyle = color;
      // context.strokeStyle = color;
      context.rect(
        squares[i].x,
        squares[i].y,
        squares[i].width,
        squares[i].height
      );

      // if (squares[i].color) {
      //   context.fillStyle = squares[i].color;
      // } else {
      //   context.fillStyle = white;
      // }
      context.fill();
      context.stroke();
      context.closePath();
      // for (let k = squares[i].x; k < squares[i].x + squares[i].width; k += 2) {
      //   for (let j = squares[i].y; j < squares[i].y + squares[i].height; j += 2) {
      //     context.beginPath();
      //     context.fillStyle = "#000";
      //     context.fillRect(j, k, 0.5, 0.5);
      //   }
      // }
    }
  };
};

canvasSketch(sketch, settings);
