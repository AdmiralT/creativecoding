# Interactive Colour Wheel No.2

This exercise had us create another colour wheel but this time to integrate everything we had learned regarding interpolation, transformation and interactivity.

For this colour wheel, I created a triangle fan that would be created everything the left mouse button was created- when it was held down, it would then follow the mouseX and mouseY coordinates. For the use of interpolation, I made it so that every time the page was refreshed it would create a colour wheel that features a different starting and ending colour. Thus, this gave the illusion of controlled randomness and allowed the display of a multitude of different colour wheel segments.

A second colour would be created if the right mouse button was held down. Originally, the plan was to use this colour wheel as a sort of contrasting palette of colours to the first, larger wheel- however, due to my own knowledge limitations, this could be not achieved so instead I changed the amount of segments and how much those segments moved with the mouseX and mouseY.


To start, we initially created the methods that held the starting colours and ending colours for the wheel. This would be used later for the lerpColor function.

As with prior, we mapped the rotation of each segment of the wheels to the mouseX position, which would then rotate based on the amount of segments in the colour wheel. The higher the amount of segments, the slower it would rotate allowing a sort of pseudo 'fine' and 'course' rotation for the wheels.

`if(mouseIsPressed) {
    if(mouseButton === LEFT) {
let angleStep = 360/segmentCount;
let rotateStep = int(map(mouseY,0,height,0,segmentCount*2));`

This was repeated later in the program to create the second wheel, albeit at a smaller size and using half the segment count for rotational value.

`if(mouseIsPressed) {
    if(mouseButton === LEFT) {
let angleStep = 360/segmentCount;
let rotateStep = int(map(mouseY,0,height,0,segmentCount*2));`
