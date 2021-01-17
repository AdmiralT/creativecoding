/*let numOfSegments;
let stepAngle;
let radius;*/
/*numOfSegments = map(mouseX,0,width,10,40);
stepAngle = 360/numOfSegments;
radius = 200;
push();
translate(250,250);
beginShape(TRIANGLE_STRIP);
  vertex(0,0);
  //vertex(mouseX,mouseY);
  for(let i=0; i<=360; i+=stepAngle) {
    let vx = (radius * cos(i));
    let vy = (radius * sin(i));
    fill(i,100,100);
    vertex(vx,vy);
  }
endShape();
pop();*/

function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
  colorMode(HSB,360,100,100);
  clear();
}

function draw() {
  let radius;
  //numOfSegments = map(mouseX,0,width,10,40);
  //stepAngle = 360/numOfSegments;
  push();
  translate(500,500);
  beginShape(TRIANGLE_FAN);
  vertex(0,0);
    for(let z = 0; z <= 360; z+=stepAngle) {
      numOfSegments = map(mouseX,0,width,20,40);
      stepAngle = 360/numOfSegments;
      radius = 400;
      let yx = (radius*cos(z));
      let yy = (radius*sin(z));
    fill(z,100,100);
    vertex(yx,yy);
    clear();
  }
    endShape();
    pop();
  push();
  translate(500,500);
  beginShape(TRIANGLE_FAN);
  vertex(0,0);
  if(keyIsDown(82)){
    for(let j = 0; j <= 360; j+=stepAngle) {
        numOfSegments = map(mouseX,0,width,40,80);
        stepAngle = 360/numOfSegments;
        radius=300;
        let zx = (radius * cos(j));
        let zy = (radius * sin(j));
        fill(j,90,100);
        vertex(zx,zy);
      }
    }
endShape();
pop();

  push();
  translate(500,500);
  beginShape(TRIANGLE_FAN);
    //vertex(mouseX,mouseY);
    vertex(0,0);
    if(keyIsDown(84)){
    for(let i=0; i<=360; i+=stepAngle) {
      numOfSegments = map(mouseX,0,width,60,100);
      stepAngle = 360/numOfSegments;
      radius=200;
      let vx = (radius * cos(i));
      let vy = (radius * sin(i));
      fill(i,80,100);
      vertex(vx,vy);
    }
  }
    endShape();
    pop();
  }

function keyPressed() {
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(), 'png');
  }
}
