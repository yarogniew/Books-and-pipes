// Bibliotekarz

var osc;
var x, y;
var step = 0.3;
var margin = 10; // margines
var xoff = 0.05;
var xincrement = 0.5;

var a = 40; // bok kwadratu


function setup() {
  //createCanvas(szerEkranu, wysEkranu);
  createCanvas(windowWidth, windowHeight);
  background(200);
  x = windowWidth/2;
  y = windowHeight/2;
 	//createCanvas(displayWidth, displayHeight);
  osc1 = new p5.Noise('white');
  osc2 = new p5.Noise('pink');
  osc1.amp(0, 0);
  osc1.start();
  osc2.amp(0, 0);
  osc2.start();

  textSize(14);
  textAlign(CENTER);
  fill(250);
  text("ESC=clear, 1=biger, 2=smaller, LEFT, RIGHT, UP, DOWN=move", windowWidth/2, 20);
}

function draw() {

  var n = noise(xoff)*5;


  //print(n);
      //background(200);
  if (keyIsPressed) {
        if (keyCode == 50) {
        a=a+0.5;}else if (keyCode == 49) {
        a=a-0.5;
      } else if (keyCode == ESCAPE)
      {
        background(200);
      } else if (keyCode == LEFT_ARROW && x>0+a/2+margin )
      {
        x=x-step-n/2-a/50;
        // -a/50 wyrównanie prędkości dużych i małych kwadratów
        osc1.amp(0.5, 0);
      } else if (keyCode == RIGHT_ARROW && x<windowWidth-a/2-margin)
      {
        x=x+step+n/2+a/50;
        osc1.amp(0.5, 0);
      } else if (keyCode == UP_ARROW && y>0+a/2+margin*4)
      {
        y=y-step-n/2-a/50;
        osc2.amp(0.8, 0);
      } else if (keyCode == DOWN_ARROW && y<windowHeight-a/2-margin)
      {
        y=y+step+n/2+a/50;
        osc2.amp(0.8, 0);
      }
  }


  rectMode(CENTER);
  //ustawienie srodka jako punktu odniesienia kwadratu
  fill('white');

  rect(x+n, y-n, a, a);

  osc1.amp(0.0, 0.1);
  osc2.amp(0.0, 0.1);
    xoff += xincrement;
    // With each cycle, increment xoff
}
