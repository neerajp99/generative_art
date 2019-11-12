increment = 0.02

def setup():
    global displayWidth, displayHeight
    size(700, 700)
    
def draw():
    loadPixels()
    x_offset = 0.0
    detail = map(mouseX, 0, width, 0.1, 0.6)
    noiseDetail(8, detail)
    
    for x in range(0, width, 1):
        x_offset += increment 
        y_offset = 0.0
        for y in range(0, height, 1):
            y_offset += increment
            bright = noise(x_offset, y_offset) * 255
            bright = random(0, 255)
            pixels[x+y*width] = color(bright)
        
    updatePixels();
