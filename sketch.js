let x = 0;
let y = 0;
let spacing = 8;
// I changed the spacing

function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
  stroke("purple and blue");
  // I changed the color
  strokeWeight(2);
  // and the stroke weight

  if (random(1) < 0.6) {
    rect (x, y, x + spacing, y + spacing);
    // I changed it from a line to a rectangle for both
  } else {
    fill (x,y, x+y)
    //changed the colors
    rect (x + 0, y + spacing, x + spacing, y);
  }

  x += 10;
  if (x > width) {
    y += spacing;
    x = 0;
  }
}
