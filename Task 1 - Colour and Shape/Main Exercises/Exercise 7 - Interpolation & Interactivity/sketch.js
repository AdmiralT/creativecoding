/*let x;
let y;
let radiusOut = 150;
let radiusIn = 100;
let colOne;
let colTwo;
let colThree;
let colFour;
let colFive;
let colSix;

function setup(){
  createCanvas(500,500);
  background(204);
  noStroke();
  let num1 = random(0,180);
  let num2 = random(180,360);

  colorMode(HSB,360,width,height);
  colOne = color(num1,width,height);
  colTwo = color(num2,width,height);
  colThree = color(num1,width=0.50,height);
  colFour = color(num2,width=0.50,height);
  colFive = color(num1,width=0.5,height=0.5);
  colSix = color(num2,width=0.5,height=0.5);

  x = width / 2;
  y = height / 2;
}

function draw() {
  let segCount = int(map(mouseX,0,width,6,60));
  let angle=0;
  let angleStep = 180.0/segCount;
  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= segCount; i++) {
    //fill(lerpColor(colOne,colTwo,angle/360));
    let vx = x + cos(radians(angle)) * radiusOut;
    let vy = y + sin(radians(angle)) * radiusOut;
    angle+=angleStep;
    vertex(vx,vy);
    vx = x + cos(radians(angle)) * radiusIn;
    vy = y + sin(radians(angle)) * radiusIn;
    vertex(vx,vy);
    angle+=angleStep;

  }
  endShape();
}*/
let x;
let y;
let outsideRadius = 150;
let insideRadius = 100;

function setup() {
  createCanvas(720, 400);
  background(204);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(204);

  let numPoints = int(map(mouseX, 0, width, 6, 60));
  let angle = 0;
  let angleStep = 180.0 / numPoints;

  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();
}
