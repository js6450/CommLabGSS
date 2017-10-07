var circles = [];
var circles1 = [];
var num_circles = 100;

function setup() {
  createCanvas(600, 600);
  noStroke();

  for (var i = 0; i < num_circles; i++) {
    circles.push(new Circle(width / 2, height / 2));
  }

  // for (var i = 0; i < num_circles; i++) {
  //   circles1.push(new Circle(width * 3 / 4, height * 3 / 4));
  // }
}

function draw() {
  background(0, 30);
  
  for (var i = 0; i < circles.length; i++) {
    circles[i].checkBoundary();
    circles[i].update();
    circles[i].display();
    // circles1[i].checkBoundary();
    // circles1[i].update();
    // circles1[i].display();
  }
}

function Circle(i, j) {
  this.xorigin = i;
  this.yorigin = j;
  this.xpos = i;
  this.ypos = j;
  this.size = random(10, 50);
  this.c = color(random(255), random(255), random(255), 150);
  this.xspeed = random(-5, 5);
  this.yspeed = random(-5, 5);

  this.display = function() {
    fill(this.c);
    ellipse(this.xpos, this.ypos, this.size, this.size);
  }

  this.update = function() {
    this.xpos += this.xspeed;
    this.ypos += this.yspeed;
  }

  this.checkBoundary = function() {
    if (this.xpos > width || this.xpos < 0 || this.ypos < 0 || this.ypos > height) {
      this.xpos = this.xorigin;
      this.ypos = this.yorigin;
    }
  }
}