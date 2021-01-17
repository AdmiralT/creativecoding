let slider;
let stepX;
let stepY;
let col1;
let col2;
let col3;
let col4;
let col5;
let col6;

function setup() {
colorMode(HSB);
createCanvas(1754,2480);
//createCanvas(1000,1000);
let num1 = random(0,180);
let num2 = random(180,360);
col1 = color(num1,width*2,height*2);
col2 = color(num2,width*2,height*2);
col3 = color(num1,width/2,height/2);
col4 = color(num2,width/2,height/2);
col5 = color(num1,width,height);
col6 = color(num2,width,height);

}

function draw() {
  background(206,28,25);

  noFill();
  let sMap = map(mouseX, 0,width, 0.010,0.10);
  let tMap = map(mouseY,0,height,0.050,0.40);
  let strokeColor = map(mouseY,0,height,0,1);
  for(i = 0; i <= height;i+=45) {
    for(j = 0; j <= width;j+=45) {
    if(j%3 === 0) {
      strokeWeight(sMap);
      stroke(lerpColor(col1,col2,1));
      let b1 = bezier(j,height,height%2,height/2,height%2,0,j,0);


      let b2 = bezier(j,height,height,height%2,height/2,0,j,0);

      let b3 = bezier(width,i,width/2,width/3,width/2,width/3,0,i,0);
      let b4 = bezier(width,i,width/2,width,width/2,width,0,i,0);
    } else {
      strokeWeight(0.05);
      stroke(lerpColor(col1,col2,1));

    }


}
    }

    }

  function keyPressed() {
    if(key == 's' || key == 'S') {
      saveCanvas(gd.timestamp(), 'png');
    }
    }
