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

function setup() {
createCanvas(500,500);
colorMode(HSB,width,height,100);
rectMode(CENTER);
noStroke();
let num1 = random(0,180);
let num2 = random(180,360);

col1 = color(num1,width*2,height*2);
col2 = color(num2,width*2,height*2);
}

function draw() {
  background(255);
  stepX = 50;
  stepY = 50;
  let transValueX = width/2;
  let transValueY = height/2;

  for(let j = 0; j<=height; j+=stepY) {
    for(let i = 0; i<=width; i+=stepX) {
      fill(lerpColor(col1,col2,i/360));
      push()
      translate(i+25,j+25);
      let rotateValue=atan2(mouseY - j, mouseX - i);
      rotate(rotateValue);
      rect(0,0,stepX,stepY);
      pop()
    }

  }


    }
