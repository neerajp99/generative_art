time = 0
x = 0
def setup():
    size(600, 600)
    background(0)

def draw():
    fill(255)
    rect(0, 0, width, height)
    
    x = 0
    
    while (x < width):
        stroke(255)
        point(x, 100 + 200 * noise (x * 0.01, time))
        x = x + 1
    
    time = time + 0.05
