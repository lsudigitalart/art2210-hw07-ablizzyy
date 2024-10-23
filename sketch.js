let startTime;
let duration = 15000; // 15 seconds (change to 30000 for 30 seconds)
let circleSize;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis(); // Record the start time of the animation
  circleSize = 50;
  bgColor = color(50, 50, 150);
}

function draw() {
  let currentTime = millis();
  let elapsedTime = currentTime - startTime;

  // Update circle size and background color based on time
  let timeFactor = elapsedTime / duration;
  
  // Vary the size of the circle like a heartbeat or musical beat
  circleSize = 50 + sin(timeFactor * TWO_PI * 4) * 30; // 4 beats in the duration
  bgColor = color(50 + sin(timeFactor * TWO_PI * 2) * 200, 50, 150 + cos(timeFactor * TWO_PI * 2) * 100);

  background(bgColor);
  
  // Draw circles at different points on the screen
  let spacing = 100;
  for (let i = spacing; i < width; i += spacing) {
    let yPosition = height / 2 + sin(i * 0.01 + timeFactor * TWO_PI * 3) * 50;
    fill(255);
    noStroke();
    ellipse(i, yPosition, circleSize);
  }

  // Stop the animation after the specified duration
  if (elapsedTime > duration) {
    noLoop();
  }
}
