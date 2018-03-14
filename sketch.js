// Books & pipes, yarogniew

var osc1, osc2, osc3, osc, oscB;
var osc2;
var x, y;
var step = 0.3;
var margin = 10; // margin
var xoff = 0.05;
var xincrement = 0.5;
var n;
var c, r; // circle or rectangle
var a; // the size of the square

function setup() {

  createCanvas(windowWidth, windowHeight);
 	//createCanvas(displayWidth, displayHeight);

  osc1 = new p5.Noise('white');
  osc1.amp(0, 0);
  osc1.start();
  osc2 = new p5.Noise('pink');
  osc2.amp(0, 0);
  osc2.start();
  osc3 = new p5.Noise('brown');
  osc3.amp(0, 0);
  osc3.start();
  osc = new p5.SqrOsc();
  osc.amp(0, 0);
  osc.start();
  oscB = new p5.SinOsc();
  oscB.amp(0, 0);
  oscB.start();

  begining();

  c = 0;
  r = 1;
}

function draw() {
    n = noise(xoff)*5;
    //           print(y,x);

    if (x<a/2+margin || x>windowWidth-a/2-margin || y<a/2+margin*4  || y>windowHeight-a/2-margin)
    {
      alarmo();
    } else {  osc.amp(0, 0);}

    if (keyCode == 67) { // klaw c lub r zmiana kształtu
    c = 1;
    r = 0;
  }else if (keyCode == 81)
    {
      r = 1;
      c = 0;
    }


  if (keyIsPressed) {
        if (keyCode == 50 && a<150) { // klaw 1,2 zmiana rozmiaru kwadratu
        a=a+0.5;
        //osc3.amp(0.5, 0);
        oscBfreq();
      }else if (keyCode == 49 && a>10)
        {
        a=a-0.5;
        oscBfreq();
      } else if (keyCode == ESCAPE) // clear window
      {
        begining();
      } else if (keyCode == LEFT_ARROW && x>a/2+margin )
      {
        x=x-step-n/2-a/50;
        // -a/50 wyrównanie prędkości dużych i małych kwadratów
        osc1.amp(0.5, 0);
      } else if (keyCode == RIGHT_ARROW && x<windowWidth-a/2-margin)
      {
        x=x+step+n/2+a/50;
        osc1.amp(0.5, 0);
      } else if (keyCode == UP_ARROW && y>a/2+margin*4)
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
  //center of the square as a reference point
  fill('white');
  //blendMode(DIFFERENCE);
  //EXCLUSION, BLEND, DIFFERENCE, MULTIPLY
  if (r) {rect(x+n, y-n, a, a);}
  if (c) {ellipse(x+n, y-n, a, a);}

  osc1.amp(0.0, 0.1);
  osc2.amp(0.0, 0.1);
  osc3.amp(0.0, 0.8);
  oscB.amp(0.0, 0.8);
    xoff += xincrement;
    // With each cycle, increment xoff
}

function alarmo() {
  osc.amp(0.2, 0);
  osc.freq(n*700);
  }

function begining() {
  x = windowWidth/2;
  y = windowHeight/2;
  a = 40;
  background(160);
  textSize(14);
  textAlign(CENTER);
  fill(250);
  text("ESC=clear, 1=smaller, 2=bigger, LEFT, RIGHT, UP, DOWN=move, q=square, c=circle, s=save", windowWidth/2, 20);
}

function oscBfreq() {
  oscB.amp(0.2, 0);
  oscB.freq(a*a*0.3);
}

function keyTyped() {
  if (key == 's') {
save('saved_picture_');
  }
}
