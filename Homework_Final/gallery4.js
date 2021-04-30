function setup()
{createCanvas(1000, 1000);}
function preload() {
  img = loadImage("/images/field.jpg");}
  fuction draw()
  {
  img.loadPixels(field.jpg);
  for (x = 0; x < img.width; x = x + 5) {
   for (y = 0; y < img.height; y = y + 5) {
      index = (floor(x) + floor(y) * img.width) * 4;
      red = img.pixels[index]
      blue = img.pixels[index + 1]
      green = img.pixels[index + 2]
      alpha = img.pixels[index + 3]
      strokeWeight(9 * Math.random())
      stroke(red, blue, green, alpha/(5 * Math.random()))
      line(x + Math.random() * 40,y ,x + 50,y + 50 * Math.random())
  }
  }
  }
