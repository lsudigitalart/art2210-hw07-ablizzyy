let song;
let amp;
let circleSize;
let duration = 20000; // 20 seconds for the animation
let startTime;

function preload() {
  // Load the MP3 file
  song = loadSound('Daydreams-chosic.com_.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create an amplitude analyzer
  amp = new p5.Amplitude();
  
  // Play the song and record the start time
  song.play();
  startTime = millis();
  
  // Set the initial circle size
  circleSize = 50;
}

function draw() {
  
  let currentTime = millis();
  let elapsedTime = currentTime - startTime;
  
  // Stop the animation when it exceeds the specified duration
  if (elapsedTime > duration) {
    noLoop();
    song.stop(); // Stop the song when the animation ends
    return;
  }

  background(50, 50, 150);

  // Get the current amplitude level (volume)
  let level = amp.getLevel();

  // Map the amplitude level to the circle size
  circleSize = map(level, 0, 1, 50, 300); // Adjust range as needed for desired effect

  // Draw animated circles based on amplitude
  let spacing = 150;
  for (let i = spacing; i < width; i += spacing) {
    let yPosition = height / 2 + sin(i * 0.01 + millis() / 500) * 50;
    fill(255);
    noStroke();
    ellipse(i, yPosition, circleSize);
  }

  // Change the background color dynamically based on amplitude
  let bgColor = color(50 + level * 200, 50, 150 + level * 100);
  background(bgColor, 80); // Background with alpha for fading effect
}
