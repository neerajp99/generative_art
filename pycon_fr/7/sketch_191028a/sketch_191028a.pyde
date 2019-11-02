points = []

def setup():
    global displayWidth, displayHeight
    size(displayWidth / 2, displayHeight)
    background(255)

def draw():
    # background(0)
    newPoints = createGrid()
    margin = 113
    # print(newoints)
    for k in newPoints:
        # fill(random(1000))
        noStroke()
        fill( random(255), random(255), random(255), random(255));
        # print(k)
        x = lerp(margin, (width - margin) * 0.2, k[0])
        y = lerp(margin, (height - margin) * 0.2, k[1])
        # print( abs(randomGaussian()))

        square(x, y, 20)
        # background(255)


def createGrid():
    count = 20
    global points
    pointsDict = dict()
    for x in range(0, count, 1):
        for y in range(0, count, 1):
            u = x 
            v = y
            # print(u, v)
            pointsDict = {
                'position': [u, v],
                # 'radius': 0.01
            }
            points.append([u, v])
            if(x == (count - 1)):
                noLoop()
    return points
