def setup():
    size(800, 800)
    background(255,229,180, 0.54)
    smooth()
    fill(100)
    rect(250, 250, 400,  400)
    filter( BLUR, 35 ) 
    smooth()
    rect(30, 450, 80, 250) 
    filter(BLUR, 20)
    
    # Main pointillism background
    for i in range(50, 750):
        for j in range(50, 750):
            smooth()
            stroke(0);
            strokeWeight(random(0.5))
            stroke(0);
            point(j, i)
            noLoop()
    
def draw():
    for i in range(200, 600):
        for j in range (200, 600):
            smooth()
            stroke(0);
            strokeWeight(random(0.8))
            stroke(0);
            point(j, i)
            noLoop()
            
    for i in range(200, 600, 30):
        for k in range(i, i+5):
            for j in range(200, 600):
               strokeWeight(random(0.3))
               stroke(0)
               point(j, k) 
            
    # Creating vertical lines
    for i in range(100, 350, 20):
        for k in range(i, i+5):
            for j in range(150, 400):
                strokeWeight(random(0.7))
                stroke(0);
                point(k, j)
                    
    for i in range(100, 350, 20):
            for j in range(150, 400):
                strokeWeight(random(1.2))
                stroke(0);
                point(i+2, j)
                
    # Dark vertical lines 
    
    for i  in range(450, 700, 2):
            for j in range(30, 80):
                strokeWeight(random(1))
                stroke(0);
                point(j, i)
                
                
    # Creating horizontal lines
    for i in range(400, 700, 20):
        for k in range(i, i+5):
            for j in range(400, 700):
                strokeWeight(random(0.7))
                stroke(0)
                point(j, k)
    
    for i in range(400, 700, 20):
        for j in range(400, 700):
            strokeWeight(random(0.7))
            stroke(0)
            point(j+2, i)
            
    # Long parallel lines
    for i in range(720, 790, 20):
        for k in range(i, i+2):
            for j in range(50, 700):
                strokeWeight(random(1.2))
                stroke(0)
                point(k, random(j))
                
        
            
            


    


    # noLoop()
            
