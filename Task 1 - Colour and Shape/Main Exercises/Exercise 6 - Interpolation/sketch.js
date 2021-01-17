let startColor;
let endColor;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  colorMode(HSB,360,100,100);
  startColor = color(360,100,100);
  endColor = color(200,100,100);
}

function draw() {
//lerpColor(color1,color2,0-1);
for(let i=0; i<= 10; i++) {
    fill(lerpColor(startColor,endColor,i/10));
    rect(50*i, 250, 50, 50);
  }
}
