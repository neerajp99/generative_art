def setup():
    size(600, 600)
    background(255)
    
def draw():
    x = 50
    y = 50
    stroke(random(255), random(255), random(255))
    line(random(100), random(100), mouseX, mouseY)
    
