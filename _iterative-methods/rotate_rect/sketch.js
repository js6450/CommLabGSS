var row = 10;
var col = 8;

var c_width, c_height;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  noStroke();
  background(0);

  c_width = width / row;
  c_height = height / col;
}

function draw() {
  background(0);
  
  for (var j = 0; j < col; j++) {
    for (var i = 0; i < row; i++) {
      push();
      translate(i * c_width + c_width / 2, j * c_height + c_height / 2);
      rotate(frameCount);
      fill(random(255), random(255), random(255));
      rect(0, 0, 30, 30);
      pop();
    }
  }
}