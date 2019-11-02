t = 0
x = 0
def setup():
    size(600, 600)
    background(0)
    

def draw():
    global t, x
    fill(255)
    noStroke()
    x = 0
    
    while (x < width):
        stroke(255)
        y = noise(x * 0.04, t)
        point(x, 100 + 200 * y)
        x = x + 1
    
    t += 0.05
