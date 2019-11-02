def setup():
    size(600, 600)
    background(255)
    noLoop()
    noStroke()
    
def draw():
    size = 30
    for i in range(0, 600, size):
        for j in range(0, 600, size):
            if random(2) < 0.7:
                fill(255)
            else:
                fill(0)
            square(i, j, size)
