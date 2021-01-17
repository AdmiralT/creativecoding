let stepX;
let stepY;
let rotateValue;
let transValueX;
let transValueY;
let col1;
let col2;
let col3;
let col4;
let col5;
let col6;
let d;

function setup() {
createCanvas(500,500);
colorMode(HSB,width,height,100);
rectMode(CENTER);
let num1 = random(0,180);
let num2 = random(180,360);
noFill();
col1 = color(num1,width*2,height*2);
col2 = color(num2,width*2,height*2);

col3=color(num1,width*4,height*4);
col4=color(num2,width*4,height*4);
}

function draw() {
  background(0);
  stepX = 50;
  stepY = 50;


  for(let j = 0; j<=height; j+=stepY) {
    for(let i = 0; i<=width; i+=stepX) {
      push()
      translate(i+25,j+25);
      let rotateValue=atan2(mouseY - j, mouseX - i);
      let transX = i;
      let transY = j;
      d = dist(transX,transY,mouseX,mouseY);
      let scaleValue = map(d,0,600,10,50);
      stroke(lerpColor(col1,col2,i/360));
      rotate(rotateValue);
      rect(0,0,scaleValue,scaleValue);
      stroke(lerpColor(col3,col4,j/180));
      ellipse(10,10,scaleValue,scaleValue);



      pop()
    }

  }


    }
