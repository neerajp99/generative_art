const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: "A4",
  orientation: "potrait"
  // units: "in",
  // pixelsPerInch: 200
};

const sketch = () => {
  let column_array = [];
  let margin = 40;
  let column_number = 60;

  for (let i = 0; i < column_number; i++) {
    column_array.push([]);
  }

  return ({ context, width, height }) => {
    // console.log(height);

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // Begin drawing the lines
    for (let i = 0; i < column_number; i++) {
      // for (let j = 0 ; j < column_number ;j++){
      let ctr = 0;
      let height_count = true;
      // While we have'nt reached the end of the page, loop over
      while (height_count) {
        let random_variable = random.range(5, 25);
        if (height_count == true) {
          column_array[i].push(random_variable);
        }
        // console.log(random_variable);
        let total_length =
          column_array[i].reduce((a, b) => a + b) + margin + ctr * 5;
        ctr++;

        if (total_length > height - margin) {
          height_count = false;
          // if (random_variable >= 5) {
          // column_array[i].pop();
          // column_array[column_array[i].length - 1] += random_variable + 5;
          // height_count = false
          // }
          // column_array[column_array[i].length - 1] =
          //   column_array[column_array[i].length - 1] -
          //   total_length +
          //   (height - margin);
          // height_count = false
        }
      }
      // }
    }

    for (let i = 0; i < column_number; i++) {
      // console.log(i)
      let rectangles = 0;
      for (let j = 0; j < column_array[i].length - 1; j++) {
        context.beginPath();
        context.fillRect(
          margin + i * 8.8,
          margin + rectangles + j * 5,
          2,
          column_array[i][j]
        );
        console.log(margin + rectangles + i);
        context.fillStyle = "#333";
        context.fill();
        rectangles += column_array[i][j];
      }
    }
  };
};

canvasSketch(sketch, settings);
