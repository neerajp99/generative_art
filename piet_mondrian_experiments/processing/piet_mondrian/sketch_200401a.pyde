def setup():
    size(800, 800)
    background(0,80,130)
    smooth()
    fill(100)
    
    for i in range(0, 800):
        for j in range(0, 800):
            smooth()
            stroke(255);
            strokeWeight(random(0.5))
            point(j, i)
            noLoop()
         
def drawPoints(squares):
    print(len(squares))
    colors = ["#d4ebd0", "#d7385e", "#fcf7bb", "#7f78d2"]
    for i in range(0, len(squares)):
        for k in range(squares[i]["x"] + 5, squares[i]["x"] + squares[i]["width"] - 5):
            for j in range(squares[i]["y"] + 5,  squares[i]["y"] + squares[i]["height"] - 5):
                smooth()
                strokeWeight(random(0.7))
                stroke(colors[int(random(0,4))])
                point(k, j)
                # filter(BLUR, 20)
        
def draw():
    height, width = 800, 800
    squares = [{
                "x": 0,
                "y": 0,
                "width": 800,
                "height": 800,
    }]
    
    # Split Square method
    def splitSquareX(coordinates):
        for i in range(len(squares) - 1, -1, -1):
            sqr = squares[i]
            if coordinates["x"] and coordinates["x"] > sqr["x"] and coordinates["x"] < sqr["x"] + sqr["width"]:
                    if random(0,1) > 0.6:
                        del squares[i:1]
                        splitAtX(sqr, coordinates["x"] )
            
    def splitSquareY(coordinates):
        for i in range(len(squares) - 1, -1, -1):
            sqr = squares[i]
            if coordinates["y"] != None and coordinates["y"] > sqr["y"] and coordinates["y"] < sqr["y"] + sqr["height"]:
                    if random(0,1) > 0.6:
                        del squares[i:1]
                        splitAtY(sqr, coordinates["y"] )
            
    # Split at X function
    def splitAtX(sqr, splitAt):
        squareA = {
                "x": sqr["x"],
                "y": sqr["y"],
                "width": sqr["width"] - (sqr["width"] - splitAt + sqr["x"]),
                "height": sqr["height"]            
        }
        squareB = {
                "x": splitAt,
                "y": sqr["y"],
                "width": sqr["width"] - splitAt + sqr["x"],
                "height": sqr["height"]            
        }
        squares.append(squareA)
        squares.append(squareB)
                       
    # Split at Y function                   
    def splitAtY(sqr, splitAt):
        squareA = {
                "x": sqr["x"],
                "y": sqr["y"],
                "width": sqr["width"],
                "height": sqr["height"] - (sqr["height"] - splitAt + sqr["y"])
                            
        }
        squareB = {
                "x": sqr["x"],
                "y": splitAt,
                "width": sqr["width"],
                "height": sqr["height"] - splitAt + sqr["y"]           
        }
        squares.append(squareA)
        squares.append(squareB)
    
    
    for i in range(0, width , width/8):
        splitSquareX({"x": i})
        splitSquareY({"y": i})

    for i in range(0, len(squares)):
        strokeWeight(6)
        stroke(0,80,130)
        # noStroke()
        noFill()
        rect(squares[i]["x"],squares[i]["y"], squares[i]["width"], squares[i]["height"])
        # for k in range(squares[i]["x"], squares[i]["width"]):
        #     for j in range(squares[i]["y"], squares[i]["height"]):
        #         strokeWeight(random(0.7))
        #         stroke(246,114,128)
        #         point(k, j)
    # print(len(squares))      
    drawPoints(squares)  
    noLoop()
            
