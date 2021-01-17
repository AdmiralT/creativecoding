# Circle Wheel

For this exercise we experimented with using the mouse X position and mouse Y position to control the amount of segments in a triangle fan.

We mapped the amount of segments displayed through the map function of p5 and assigned it to the mouse X.

`numOfSegments = map(mouseX,0,width,10,40);
stepAngle = (TWO_PI)/numOfSegments;`

This allowed us to control the amount of segments created, but we still needed to draw out the triangle fan.

To do this, we began with a vertex of (0,0); the top left corner of the canvas. This was then translated to the center point of the canvas, (250,250).

`translate(250,250);
beginShape(TRIANGLE_FAN);
  vertex(0,0);`

To draw the triangle fan we then created a for loop that would increment by the stepAngle, up to when it creates a full circle.

`for(let i=0; i<=360; i+=stepAngle) {
    let vx = (radius * cos(i));
    let vy = (radius * sin(i));
    vertex(vx,vy);`

After the for loop we ended the shape.

This exercise demonstrated the use of mapping with shapes and controlling the amount of segments drawn using the mouse coordinates. 
