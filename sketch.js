var szerEkranu = 600; wysEkranu = 600;

var osc;
//var playing = false;
var x = szerEkranu/2; y = wysEkranu/2;
var step = 0.3;

var xoff = 0.05;
var xincrement = 0.5;

var a = 38; // bok kwadratu

function setup() {
  createCanvas(szerEkranu, wysEkranu);
  background(200);
 	//createCanvas(displayWidth, displayHeight);
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
      //background(200);
  if (keyIsPressed) {

    /*if (keyCode == BACKSPACE && a<60)
    {
        a=a+0.5;
      }
      if (keyCode == 'a' && a>10)
      {
          a=a-0.5;
        }*/

    if (keyCode == ESCAPE)
      {
        background(200);
      }

    if (keyCode == LEFT_ARROW && x>0 )
      {
        x=x-step-n;
        osc1.amp(0.5, 0);
      }
    if (keyCode == RIGHT_ARROW && x<szerEkranu-38)
      {
        x=x+step+n;
        osc1.amp(0.5, 0);
      }
    if (keyCode == UP_ARROW && y>0)
      {
        y=y-step-n;
        osc2.amp(0.8, 0);
      }
    if (keyCode == DOWN_ARROW && y<wysEkranu-38)
      {
        y=y+step+n;
        osc2.amp(0.8, 0);
      }
  }


  rectMode(CENTER);
  //ustawienie srodka jako punktu odniesienia kwadratu
  fill('white');

  var rand=random(1);
  rect(x+n, y-n, a, a);

  osc1.amp(0.0, 0.1);
  osc2.amp(0.0, 0.1);
    xoff += xincrement;
}

function keyTyped() {
  if (key == '[') {
      a=a+5;

    text(a, 10, 10);
}
}
