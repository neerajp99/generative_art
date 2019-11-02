def setup():
    size(900, 700)
    background(255)
    printArray(PFont.list());
    f = createFont("Zapfino", 110)
    textFont(f)


def draw():

    # draw rectabgles and base lines
    for j in range(400, 0, -10):
        for i in range(400, 0, -5):
            if i < 200:
                 strokeWeight(0.005)
                 stroke(200, 50)
                 fill(255)
                 rect(i,j,i*2,j*2)
            else:
                # stroke(255, 60)
                strokeWeight(0.005)
                fill(220, 70)
                line(i*3, j*2, i, j)
                
    # draw half ellipse on the bottom right
    for i in range(0, 500, 50):
        noFill()
        stroke(0, 60)
        ellipse(580, 700, i, i)
        
    # draw vertical rectangles on the bottom
    for i in range(0, 300, 20):
        for j in range(0, 400, 30):
            if i < 250:
                noStroke()
                fill(j * 0.9)
                rect(i + 450, 400 - j, 7, 4)
                
    # add random pattern to the sketch
    
    for i in range(-20, 500, 20):
        for j in range(-20, 500, 20):
            # fill(255, 76)
            smooth()
            noFill()
            stroke(180, 10)
            strokeWeight(1)
            ellipse(random(width), random(height), random(width), random(height))
            
    # add alphabets
    # line(x, 220, x, height);
    fill(0,99)
    text("a", 140, 190)
    fill(0, 75)
    text("f", 140, 300)
    fill(0, 50)
    text("p", 140, 390)
    fill(0, 30)
    text("y", 140, 480)


        
