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
    circle(250,200,275);

    // eyes
    strokeWeight(10);
    stroke(0)
    fill(0);
    fill(10, 24, 120);
    stroke(0)
    rect(300,185,50,10);
    stroke(0)
    rect(150,185,50,10);


    // nose
    point(248,210);

    // body
    fill(81, 34, 40);
    stroke(0)
    rect(145,315,200,250);
    triangle(50, 440, 140, 320, 140, 440)
    triangle(430, 440, 340, 320, 340, 440)

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
    text("William Kirkpatrick",270,500 );


}
