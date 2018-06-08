
function setup() {
  createCanvas(720, 720);

  colorMode(HSB, 255, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(mouseY / 2, 100, 100);

  fill(360 - mouseY / 2, 300 - mouseY/2, 100);
  rect(360, 360, mouseX, mouseX);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
