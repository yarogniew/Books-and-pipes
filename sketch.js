
var osc;
var playing = false;
var x = 215;
var y = 215;

function setup() {
  createCanvas(480, 480);
  osc1 = new p5.Noise('white');
  osc2 = new p5.Noise('pink');
  osc1.amp(0, 0);
  osc1.start();
  osc2.amp(0, 0);
  osc2.start();
}

function draw() {
  if (keyIsPressed) {

    if (keyCode == LEFT_ARROW) {
      x--;
      osc1.amp(0.5, 0);
    }
    if (keyCode == RIGHT_ARROW) {
      x++;
      osc1.amp(0.5, 0);
    }
    if (keyCode == UP_ARROW) {
      y--;
      osc2.amp(0.8, 0);
    }
    if (keyCode == DOWN_ARROW) {
      y++;
      osc2.amp(0.8, 0);
    }
  }
  rect(x, y, 30, 30);

  osc1.amp(0.0, 0.1);
  osc2.amp(0.0, 0.1);
}
