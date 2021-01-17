# Transformations

This was a simple exercise we used to understand the process involved with using translations in Javascript and p5. The concept of push() and pop() were introduced, and we used the degrees angleMode() instead of the default radians.

The goal of this exercise was to create two rectangles at the same origin point (0,0), and then translate them both so that one was above the other.

To achieve this, we separated each rectangle into its own push() and pop(). The key thing to note with transformation is that push and pop essentially separates whatever is in between them into its own coordinate system, allowing us to independently control the translations.

`push();
  translate(200,200);
  rect(0,0,100,100)
pop();`
