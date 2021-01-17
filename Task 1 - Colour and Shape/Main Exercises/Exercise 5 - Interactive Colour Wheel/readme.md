# Interactive Colour Wheel

This exercise allowed us to combine what we learned from previous tasks with transformations, mapping and the usage of beginShape. The goal was to create an interactive colour wheel that would allow us to change the hue of the colours, or the amount of segments present in the wheel. For this exercise, I chose to change the amount of segments created by following a similar method to previous examples and map the mouseX with the amount of segments.

To begin with, we first set our angleMode to degrees and colorMode to HSB, as we had been doing prior. For this exercise I used a triangle fan, but there are other shapes that would have served the same purpose such as a triangle strip. With the previous circle wheel exercise, the number of segments created would be mapped to the mouseX, and the for loop would be responsible for creating the shape each time it ran.

`for(let z = 0; z <= 360; z+=stepAngle) {
  numOfSegments = map(mouseX,0,width,20,40);
  stepAngle = 360/numOfSegments;
  radius = 400;
  let yx = (radius*cos(z));
  let yy = (radius*sin(z));`

Once achieved, we could then create two more triangle fans within the original with a different amount of segments displayed. This was done twice to give the illusion of smaller colour wheels within a larger parent.

`for(let i=0; i<=360; i+=stepAngle) {
  numOfSegments = map(mouseX,0,width,60,100);
  stepAngle = 360/numOfSegments;
  radius=200;
  let vx = (radius * cos(i));
  let vy = (radius * sin(i));
  fill(i,80,100);
  vertex(vx,vy)`

  The secondary and teritary wheels were assigned to the R and T keys respectively, which would create the colour wheels when pressed and display them within the larger wheel.
