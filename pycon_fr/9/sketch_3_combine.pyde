lengthOfPoints = [150, 300, 400];
radius = [5, 10, 15];
theta = [PI / 2, PI / 4, PI / 8];
points = [0.05, -0.05, 0];

def setup():
    size(600, 600)
    background(255)
    
def draw():
    stroke(0)
    strokeWeight(random(1))
    
    for i in range(0, 50, 1):
        translate(300, 300)
        x1 = 0
        x2 = 0
        y1 = 0 
        y2 = 0
        for j in range(0, 3, 1):
            x = x1 + lengthOfPoints[j] * sin(theta[j]) + i * j
            y = y1 + lengthOfPoints[j] * cos(theta[j]) + i * j
            fill(0, 60)
            # square(x, y, 30)
            ellipse(x, y, radius[j],radius[j])
            ellipse(x*2, y/2, radius[j], radius[j])
            # line(x1, y1, x, y)
            theta[j] += points[j]
