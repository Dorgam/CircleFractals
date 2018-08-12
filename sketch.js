var step;

function setup() {
  createCanvas(640, 800);
  step = createVector(floor(random() * 100), floor(random() * 100), floor(random() * 100));
}

function draw() {
  background(51);
  drawCircle(width / 2, height / 2, map(mouseX, 0, 640, 200, 300), 1);
}

function drawCircle(x, y, diameter, generation) {
  var generationColor = getGenerationColor(generation);
  noStroke();
  fill(generationColor.x, generationColor.y, generationColor.z);
  ellipse(x, y, diameter, diameter);

  generation += 1;

  if (diameter > 10) {
    drawCircle(x + diameter / 2, y, diameter / 2, generation);
    drawCircle(x - diameter / 2, y, diameter / 2, generation);
    drawCircle(x, y + diameter / 2, diameter / 2, generation);
    drawCircle(x, y - diameter / 2, diameter / 2, generation);
  }
}

function getGenerationColor(g) {
  step.x += g;
  step.y += g;
  step.z += g;
  return createVector(50 * 255, noise(step.y) * 255, 50);
}

function mouseDragged() {
  console.log(mouseX);
  drawCircle(width / 2, height / 2, map(mouseX, 0, 640, 200, 300), 1);
}
