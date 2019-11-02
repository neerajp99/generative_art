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
    x = displayWidth /4
    y = displayHeight/2
    
    beginShape()
    for i in range(TOTAL_DEGREES):
        curveX = x + radius * cos(radians(i)) * (noise(i * 0.02, float(frameCount) / 150))
        curveY = y + radius * sin(radians(i)) *(noise(i * 0.02, float(frameCount) / 150))
        curveVertex(curveX, curveY)
    endShape(CLOSE)
    
