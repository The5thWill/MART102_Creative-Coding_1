function setup()
function preload() {
  img = loadImage("mountain_sun.jpg");
function preload() {
  img = loadImage("snow_lake.jpg");
function preload() {
  img = loadImage("sun_lake.jpg");
function preload() {
  img = loadImage("field.jpg");
}
{
  img.loadPixels(mountain_sun.jpg);
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
img.loadPixels(snow_lake.jpg);
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
img.loadPixels(sun_lake.jpg);
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