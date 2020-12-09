let segmentCount = 36;
let radius;
let col1;
let col2;
let col3;
let col4;
let col5;
let col6;

function setup() {
  createCanvas(1000,1000);
  let num1 = random(0,180);
  let num2 = random(180,360);

  colorMode(HSB,360,width,height);
  col1 = color(num1,width,height);
  col2 = color(num2,width,height);
  col3 = color(num1,width*0.75,height);
  col4 = color(num2,width*0.75,height);
  col5 = color(num1,width*0.5,height*0.5);
  col6 = color(num2,width*0.5,height*0.5);
  noStroke();
}

function draw() {
  if(mouseIsPressed) {
      if(mouseButton === LEFT) {
  let angleStep = 360/segmentCount;
  let rotateStep = int(map(mouseY,0,height,0,segmentCount*2));
  radius = 300;
  push()
  translate(mouseX,mouseY)
  let lgRotate = radians(rotateStep*angleStep);
  rotate(lgRotate);
  beginShape(TRIANGLE_FAN);
  vertex(0,0);
  for (let angle = 0; angle<= 360; angle += angleStep) {
    let vx = cos(radians(angle)) * radius;
    let vy = sin(radians(angle)) * radius;
    vertex(vx,vy);
    fill(lerpColor(col1,col2,angle/360));
    clear();
  }
  endShape();
  pop();
}
}
if(mouseIsPressed) {
    if(mouseButton === RIGHT) {
let angleStep = 180/segmentCount;
let rotateStep = int(map(mouseY,0,height,0,segmentCount));
radius = 100;
push()
translate(mouseX,mouseY)
let lgRotate = radians(rotateStep*angleStep);
rotate(lgRotate);
beginShape(TRIANGLE_FAN);
vertex(0,0);
for (let j = 0; j<= 360; j += angleStep) {
  let vx = cos(radians(j)) * radius;
  let vy = sin(radians(j)) * radius;
  vertex(vx,vy);
  fill(lerpColor(col3,col4,j/360));
  clear();
}
endShape();
pop();
}
}
}
