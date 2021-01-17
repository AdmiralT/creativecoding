let numOfSegments;
let stepAngle;
let radius;


function setup() {
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
}

function draw() {
  numOfSegments = map(mouseX,0,width,10,40);
  stepAngle = (TWO_PI)/numOfSegments;
  radius = 200;
  push();
  translate(250,250);
  beginShape(TRIANGLE_FAN);
    vertex(0,0);
    //vertex(mouseX,mouseY);
    for(let i=0; i<=360; i+=stepAngle) {
      let vx = (radius * cos(i));
      let vy = (radius * sin(i));
      vertex(vx,vy);
    }
endShape();
pop();
}
