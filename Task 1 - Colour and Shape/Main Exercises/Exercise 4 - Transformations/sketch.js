


function setup() {
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
push();
  translate(200,200);
  rect(0,0,100,100)
pop();

push();
  translate(100,100);
  rect(0,0,100,100);
pop();
}
