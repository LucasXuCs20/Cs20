// Triangle Heart Asgn Solution

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function fillColour(x1, y1, x2, y2, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();
}

function draw() {
  // Draw all GREY Triangles
  ctx.fillStyle = "grey";

  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(100, 0);
  ctx.lineTo(100, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(300, 0);
  ctx.lineTo(300, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 200);
  ctx.lineTo(200, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(300, 100);
  ctx.lineTo(300, 200);
  ctx.lineTo(400, 200);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(100, 300);
  ctx.lineTo(200, 200);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(200, 400);
  ctx.lineTo(300, 300);
  ctx.fill();

  // Draw all PINK Triangles
  ctx.fillStyle = "pink";
  fillColour(100, 0, 100, 100, 200, 100);
  fillColour(0, 100, 0, 200, 100, 200);
  fillColour(300, 100, 400, 100, 400, 200);
  fillColour(200, 200, 300, 200, 300, 300);
  fillColour(100, 300, 200, 300, 200, 400);
  // Draw all RED Triangles
  ctx.fillStyle = "red";
  fillColour(300, 0, 300, 100, 400, 100);
  fillColour(0, 100, 100, 100, 100, 200);
  fillColour(200, 100, 300, 100, 200, 200);
  fillColour(200, 200, 200, 300, 100, 300);
  fillColour(300, 200, 400, 200, 300, 300);
  // Draw all YELLOW Triangles
  ctx.fillStyle = "yellow";
  fillColour(0, 200, 100, 200, 100, 300);
  fillColour(100, 200, 200, 100, 200, 200);
  fillColour(200, 200, 300, 100, 300, 200);
  fillColour(200, 200, 200, 300, 300, 300);
}
