var characterX = 200;
var characterY = 200;
var w = 80;
var s = 76;
var a = 58;
var d = 61;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

var rectangleObject;

function setup()
{
    createCanvas(800, 600);

  rectangleObject = new Rectangle(200,300, 100, 50, 120, 35, 210);
  rectangleObject = new Rectangle(100,200, 100, 50, 120, 35, 210);
  rectangleObject = new Rectangle(50,10, 100, 50, 120, 35, 210);

    for (var i = 0; i < 50; i++) {
          shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          shapeXs[i] = getRandomNumber(500);
          shapeYs[i] = getRandomNumber(600);
          diameters[i] = getRandomNumber(30);

    createCharacter(200,350);
}


function draw()
{
    background rgb(5,35,84);
    stroke(0);
    fill(0);
    createBorders(20);

     rectangleObject.display();

    textSize(24);
    text("EXIT", width-75 ,height-75)

    drawCharacter();
    characterMovement();

    fill(23,40,123);
    circle(characterX,characterY,25);
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        shapeXs[i] += shapeXSpeeds[i];
          shapeYs[i] += shapeYSpeeds[i];

          if (shapeXs[i] > width) {
                      shapeXs[i] = 0;
                  }
                  if (shapeXs[i] < 0) {
                      shapeXs[i] = width;
                  }
                  if (shapeYs[i] > height) {
                      shapeYs[i] = 0;
                  }
                  if (shapeYs[i] < 0) {
                      shapeYs[i] = height;
                  }
              }

              fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);

   if(characterX > width && characterY > width-50)
   {
       fill(0);
       stroke(5);
       textSize(26);
       text("You Win", width/2-50, height/2-50);
   }


   function characterMovement()
{

   if(keyIsDown(w))
   {
       characterY -= 20;
   }
   if(keyIsDown(s))
   {
       characterY += 20;
   }
   if(keyIsDown(a))
   {
       characterX -= 20;
       console.log("movement: " + characterX);
   }
   if(keyIsDown(d))
   {
       characterX += 20;
   }
}

    fill(13,145,14);
    circle(shapeX, shapeY, 10);

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);

    function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);

    fill(120,130,140);
circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win", width/2-60, height/2-60);
    }

    fill(120,130,140);
    square(mouseShapeX, mouseShapeY, 25,25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 20;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX += 20;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 20;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 20;
    }
  }

  function createBorders(thickness)
  {
      rect(0,0,width,thickness);
      rect(0,0,thickness,height);
      rect(0, height-thickness,width, thickness);
      rect(width-thickness,0,thickness,height-50);
  }

  function getRandomNumber(number) {
      return Math.floor(Math.random() * number) + 10;}
    }
