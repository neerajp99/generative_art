def setup():
    size(600, 400)
    background(0)
    strokeWeight(random(10))
    frameRate(2)
    
def draw():
    for i in range(0, width, 1):
        x = random(255)
        stroke(x)
        line(i, 0, i, height)
