
function setup() {
  var cnv = createCanvas(320, 320);

  colorMode(HSB, 255, 100, 100);
  rectMode(CENTER);
  noStroke();
  cnv.parent('sketch-holder');
}

function draw() {
  background(mouseY / 2, 100, 100);

  fill(360 - mouseY / 2, 300 - mouseY/2, 100);
  rect(160, 160, mouseX, mouseX);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
