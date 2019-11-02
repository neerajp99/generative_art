x = 500
y = 500
k = 0
def setup():
    size(600, 600)
    background(255)
    
def draw():
    global x, y, k
    fill(k)
    noStroke()
    ellipse(width / 2, height /2, x, y)
    x = x - 10
    y = y - 10
    k = k + 5
    
    if x == 0 or y == 0:
        noLoop()
    
    
