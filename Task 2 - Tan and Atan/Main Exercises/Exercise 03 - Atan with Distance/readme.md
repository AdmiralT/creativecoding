# Using Atan with Distance


This exercise served as a continuation of our previous usage of atan by incorporating distance and scaling into our creative process.

Through this, we were able to create a piece that scaled the size of the rectangles based on their distance from the mouseX and Y positions. The closer a square was to the mouseX and Y, the smaller it would get. The further away, the larger it would get.


This was achieved by combining our previous code with a new method called dist. Distance allowed us to use the iterations of the for loop and our mouse positions to calculate the distance between each respective point. This could then be scaled using scaleValue, completing our program.

`d = dist(transX,transY,mouseX,mouseY);
let scaleValue = map(d,0,600,10,50);`

With this, we also integrated interpolation on the squares and circles, assisting in creating an interesting generative piece of art. 
