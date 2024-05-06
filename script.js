const BLACK = [0, 0, 0];
const WHITE = [255, 255, 255];
const GOLD = [219, 168, 0];
const RADIUS = 300;

let dotCounter = 0;

function setup() {
  createCanvas(1265, 600);
  background(BLACK);
  noStroke();
  textSize(15);
  textFont('Consolas');
  textAlign(CENTER, CENTER);
  frameRate(1000000); // Increase the frame rate for faster dots
}

let inside = 0;
let total = 0;

function draw() {
  total++;
  const x = random(0, 2 * RADIUS);
  const y = random(0, 2 * RADIUS);

  fill(WHITE);
  const sqrDist = (RADIUS - x) * (RADIUS - x) + (RADIUS - y) * (RADIUS - y);
  if (sqrDist <= RADIUS * RADIUS) {
    fill(GOLD);
    inside++;
  }
  circle(x + (width - 2 * RADIUS) / 2, y + (height - 2 * RADIUS) / 2, 7);
  dotCounter++;

  fill(BLACK);
  rect((width - 300) / 2, (height - 2 * RADIUS) / 2 + RADIUS, 300, (height - 2 * RADIUS) / 2);
  
  fill(BLACK);
  rect((width - 300) / 2, 315, 300, 20);
  fill(WHITE);
  const approximatePi = 4 * inside / total;
  const accuracy = (approximatePi > PI) ? ((PI / approximatePi) * 100) : ((approximatePi / PI) * 100); // Calculate accuracy in percentages
  text('approximate π:             ' + approximatePi.toFixed(15), width / 2, 325);

  fill(BLACK);
  rect((width - 300) / 2, 335, 300, 20);
  fill(WHITE);
  text('     real π:             ' + PI.toFixed(15), width / 2, 345);

  fill(BLACK);
  rect((width - 300) / 2, 355, 300, 20);
  fill(WHITE);
  text('accuracy:             ' + accuracy.toFixed(2) + '%', width / 2, 365);

  fill(BLACK);
  rect((width - 300) / 2, 375, 300, 20);
  fill(WHITE);
  text('dots:             ' + dotCounter, width / 2, 385);
}

function keyPressed() {
  if (keyCode == ENTER) {
    inside = 0;
    total = 0;
    dotCounter = 0;
    background(BLACK); 
  }
}
