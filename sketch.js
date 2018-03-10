var osc;
var playing = false;
var x = 215;
var y = 215;
var step = 0;

var xoff = 0.05;
var xincrement = 0.5;

function setup() {
  createCanvas(640, 640);

  osc1 = new p5.Noise('white');
  osc2 = new p5.Noise('pink');
  osc1.amp(0, 0);
  osc1.start();
  osc2.amp(0, 0);
  osc2.start();
}

function draw() {
  var n = noise(xoff)*5;
  // With each cycle, increment xoff

  //print(n);

  if (keyIsPressed) {

    if (keyCode == LEFT_ARROW) {
      x=x-step-n;
      osc1.amp(0.5, 0);
    }
    if (keyCode == RIGHT_ARROW) {
      x=x+step+n;
      osc1.amp(0.5, 0);
    }
    if (keyCode == UP_ARROW) {
      y=y-step-n;
      osc2.amp(0.8, 0);
    }
    if (keyCode == DOWN_ARROW) {
      y=y+step+n;
      osc2.amp(0.8, 0);
    }
  }
  fill('white');
  rect(x+n, y-n, 40, 40);
  noFill();
  rect(1,1,640-2, 640-2);

  osc1.amp(0.0, 0.1);
  osc2.amp(0.0, 0.1);
    xoff += xincrement;
}
