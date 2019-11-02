def setup():
    size(600, 600)
    background(255)
    
def draw():
   global colors
   for i in range(0, 100, 1):
       a = random(100)
       if a > 70:
           fill(random(255), random(255), random(10))
           noStroke()
           ellipse(random(500), random(500), 60, 60)
           noLoop()
           
       else:
           noStroke()
           square(random(500), random(500), 50)

           
