
function setup() {
  createCanvas(500,500);
  noStroke();
  colorMode(HSB, width, height,100);
  background(0,0,0)

}

function draw() {
  let stepX= 10;
  let stepY= 10;

  for(let gridY=0; gridY<height;gridY=gridY+=stepY) {
    for (let gridX=0; gridX<width;gridX=gridX+=stepX) {
      fill(gridX,height - gridY,100);
      push();
      translate(gridX,gridY);
      rect(0,0,stepX,stepY);
      //rect(gridX,gridY,stepX,stepY);
      pop();
    }
  }

}


  function keyPressed() {
    if(key=='s' || key=='S') {
      saveCanvas(gd.timestamp(), 'png');
    }
  }
