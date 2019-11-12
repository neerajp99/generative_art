const canvasSketch = require("canvas-sketch")

// adding canvas settings
const settings = {
  dimensions: "A4",
  unites: "in",
  orientation: "landscape",
  pixelsPerInch: 300,
  backgroundColor: 0
}

const sketch = () => {
  return({ context, width, height }) => {
    console.log(height, width)
    context.fillStyle = "black"
    context.fillRect(0, 0, width, height)

    let start = new Date().getMilliseconds();
    // draw a bunch of cirlces vertically down '
    for (let i = 0 ; i < 220 ; i++){
      let endTime = 0
      // let x = new Date()
      // let y = x.getSeconds()
      // console.log(y)
      let elapsed = Math.abs((new Date().getMilliseconds() - start))
      if (elapsed/10 > 60) {
        elapsed -= 60
      }
      console.log(elapsed/10)

      context.beginPath()
      context.arc(width/2 + 100 * Math.sin(i * 0.2 + elapsed), 150 + i, width * 0.03, 0, Math.PI*2, false)
      context.fillStyle = 'white'
      context.fill()
      context.lineWidth = width * 0.02
      context.strokeStyle = 'green'
      context.stroke()
    }
  }
}

canvasSketch(sketch, settings)
