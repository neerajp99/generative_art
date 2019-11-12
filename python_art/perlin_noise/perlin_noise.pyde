TOTAL_DEGREES = 360
radius = 0

def setup():
    global displayWidth, displayHeight, radius
    size(displayWidth/2, displayHeight)
    background(0)
    noFill()
    stroke(random(255), random(255))
    radius = height / 2
    
def draw():
    radius = height / 2
    center_x = displayWidth /4
    center_y = displayHeight/2
    
    beginShape()
    for i in range(TOTAL_DEGREES):
        noiseFactor = noise(i * 0.02, float(frameCount) / 150)
        x = center_x + radius * cos(radians(i)) * noiseFactor
        y = center_y + radius * sin(radians(i)) * noiseFactor
        curveVertex(x, y)
    endShape(CLOSE)
    
