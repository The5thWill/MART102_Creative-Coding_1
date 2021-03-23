var headX = 250;
var headY = 200;
var headDirection = 1;

var noseX = 248;
var noseY = 210;
var noseDirection = 3;

var eyeX = 150;
var eyeY = 185;
var eyeDirection = 1;

var eyeX = 300;
var eyeY = 185;
var eyeDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;

var bodyX = 145;
var bodyY = 315;
var bodyDirection = 3;


function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(67,79,100);
    textSize(22);

    // head
    fill(235, 187, 175);
    stroke(0)
    circle(250, Y,275);
    headY += head Direction;
   if(headY <= 200 || headY >= 0 )
   {
       head Direction *= -1;

    // eyes
    strokeWeight(10);
    stroke(0)
    fill(0);
    fill(10, 24, 120);
    stroke(0)
    rect(eyeX,185,50,10);
    stroke(0)
    rect(eyeX,185,50,10);
    eyeX+=eyeDirection;
    if(eyeX >= 300 || eyeX <= 150)
    {
        eyeDirection *= -1;
    }
    eyeX+=eyeDirection;
    if(eyeX >= 150 || eyeX <= 300)
    {
        eyeDirection *= +1;
    }


    // nose
    point(248,noseY);
    noseY += noseDirection;
   if(noseY <= 210 || noseY >= 0 )
   {
       noseDirection *= -1;

    // body
    fill(81, 34, 40);
    stroke(0)
    rect(145,315,200,250);
    triangle(50, 440, 140, 320, 140, 440)
    triangle(430, 440, 340, 320, 340, 440)
    bodyY += bodyDirection;
   if(bodyY <= 0 || bodyY >= 315 )
   {
       bodyDirection *= -3;
   }
   bodyX += bodyDirection;
  if(bodyX <= 0 || bodyX >= 145 )
  {
      bodyDirection *= -1;
  }

    // mouth
    fill(59,46,38)
    stroke(59,46,38)
    ellipse(250, 275, 220, 120)


    // hair
    ellipse(250, 100, 200, 80)
    triangle(150, 100, 130, 266, 130, 130)
    triangle(365, 120, 365, 266, 340, 90)

    fill(120);
    textSize(22);
    textSize(size);
  size+= sizeDirection;
  count++;
  if(count > 5)
  {
      sizeDirection *=-1;
      count = 0;
  }
    text("William Kirkpatrick",270,500 );

}
