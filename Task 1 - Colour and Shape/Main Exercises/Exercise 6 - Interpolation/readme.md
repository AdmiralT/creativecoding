# Interpolation

This was a very simple exercise that we used to grasp the concept of interpolation between colours and the lerpColour function in p5. Interpolation explores the different shades between a starting colour and an end colour; we can control how dynamic or drastic those shades and hues can be with the lerpColor function.

`fill(lerpColor(startColor,endColor,i/10));`

We created a starting and ending color using HSB values, that would then colour a row of boxes displayed at the top of our canvas.

`startColor = color(360,100,100);
endColor = color(200,100,100);`

By utilising the lerpColor function, we were able to display the colours values between that starting colour and ending colour, meaning each box between them would be a different colour. 
