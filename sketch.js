var szerEkranu = 600; wysEkranu = 600;

var osc;
//var playing = false;
var x = szerEkranu/2; y = wysEkranu/2;
var step = 0.3;

var xoff = 0.05;
var xincrement = 0.5;

var a = 30; // bok kwadratu

function preloader(){
  text("sranie",10,10);
  delay(3000);
}

function setup() {
  //createCanvas(szerEkranu, wysEkranu);
  createCanvas(windowWidth, windowHeight);
  background(200);
 	//createCanvas(displayWidth, displayHeight);
  osc1 = new p5.Noise('white');
  osc2 = new p5.Noise('pink');
  osc1.amp(0, 0);
  osc1.start();
  osc2.amp(0, 0);
  osc2.start();

  textSize(16);
  textAlign(CENTER);
  fill(240);
  text("ESC=clear, '1'=biger, '2'=smaller, arrays=move" , windowWidth/2, windowHeight/2);
}

function draw() {

  var n = noise(xoff)*5;
  // With each cycle, increment xoff

  //print(n);
      //background(200);
  if (keyIsPressed) {
        if (keyCode == 50) {
        a=a+0.5;}else if (keyCode == 49) {
        a=a-0.5;
        }

    if (keyCode == ESCAPE)
      {
        background(200);
      }

    else if (keyCode == LEFT_ARROW && x>0 )
      {
        x=x-step-n/2-a/50;
        // -a/30 wyrównanie prędkości dużych i małych kwadratów
        osc1.amp(0.5, 0);
      }
    else if (keyCode == RIGHT_ARROW && x<szerEkranu-38)
      {
        x=x+step+n/2+a/50;
        osc1.amp(0.5, 0);
      }
    else if (keyCode == UP_ARROW && y>0)
      {
        y=y-step-n/2-a/50;
        osc2.amp(0.8, 0);
      }
    else if (keyCode == DOWN_ARROW && y<wysEkranu-38)
      {
        y=y+step+n/2+a/50;
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

/*function keyTyped() {

  if (key == '=') {
      a=a+3;}else if (key == '-') {
      a=a-3;
      }

}*/
