# Interpolation and Interactivity

This exercise explored using both interpolation in a shape and also integrate previous uses of interactivity with mapping and mouse coordinates.

While I could not get the interpolation to work with the interactive shape, I learned a great deal about how to use interpolation in creative and interesting ways.

The idea was to create an interactive shape, in this case a triangle strip, that would then interpolate between colours and increase or decrease the amount of interpolation by use of the mapped mouse X and/or mouseY. This would allow us to control the interactivity of the shape as well as the interpolation.

To begin with, the steps we used prior to create interactive colour wheels was used to create a triangle strip instead of a fan this time. Strips do not use segments in the same way that fans use- instead, we mapped the number of points in the triangle strip to the mouseX. This would allow us to control the shaped and affect the interpolation within that shape.

`let numPoints = int(map(mouseX, 0, width, 6, 60));
let angle = 0;
let angleStep = 180.0 / numPoints;`

The smaller the number of points, the less rounded and smooth the shape became and more akin to a dodecahedron or a pentagon.

Two sets of coordinates were used to create the shape of the triangle strip, utilising an outside and an inside radius. The shape would then be drawn out from those coordinate points, assigned to a vertex as px and py.

`let px = x + cos(radians(angle)) * outsideRadius;
let py = y + sin(radians(angle)) * outsideRadius;
angle += angleStep;
vertex(px, py);
px = x + cos(radians(angle)) * insideRadius;
py = y + sin(radians(angle)) * insideRadius;
vertex(px, py);`
