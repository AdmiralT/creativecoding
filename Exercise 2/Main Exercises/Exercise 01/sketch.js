let numSegments;
let stepAngle;
let radius;

function setup() {
createCanvas(500,500);
colorMode(HSB,360,100,100);

}

function draw() {
  numSegments = 10;
  stepAngle = TWO_PI/numSegments;
  let length = 50;
  strokeWeight(5);

  for(let i = 0; i<=TWO_PI; i+=stepAngle) {
    push();
    translate(width/2,height/2);
    rotate(i);
    line(0,0,length,length);
    pop();

  }
}
