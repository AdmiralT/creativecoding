# Rotation and Atan

For this excercise we began to apply what we learned about atan in a creative way, as well as integrating previous usages of interpolation. With this exercise, we created a grid of squares across the length and width of our chosen canvas size, and had their point of reaction follow our mouseX and mouseY coordinates using atan.

To begin with, we first simply created a number of squares across the top and side of the canvas, using a variable to determine the amount of squares that would be created.

`stepX = 50;
stepY = 50;`

`rect(0,0,stepX,stepY);`

With the grid created, we needed to now assign the rotation value of each square. this was achieved through using atan2, rotating based on the respective mouseX and mouseY.

`let rotateValue=atan2(mouseY - j, mouseX - i);
  rotate(rotateValue);`

J and I served as our for loop iterations.
