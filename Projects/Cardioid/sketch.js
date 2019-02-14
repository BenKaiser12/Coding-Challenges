// Global Variables
var r;
let factor = 3;

function setup() {
  var canvas = createCanvas(750, 750);
  canvas.parent('canvas');
  r = width / 2 - 10;
  background(50);
}

function getVector(i, total) {
  let angle = map(i % total, 0, total, 0, TWO_PI);
  var vec = p5.Vector.fromAngle(angle + PI);
  vec.mult(r);

  return vec;
}

function draw() {
  let total = 200;

  factor += 0.01;

  translate(width / 2, height / 2);
  var r = width / 2 - 10;
  for (let i = 0; i < total; i++) {
    // loops for days
    let v = getVector(i, total);

    stroke(0, 255, 0);
    strokeWeight(1);
    noFill();
    ellipse(0, 0, 2 * r, 2 * r);

    stroke(255);
    strokeWeight(10);
    ellipse(v.x, v.y, 5, 5);
  }

  for (let i = 0; i < total; i++) {
    var a = getVector(i, total);
    var b = getVector(i * factor, total);
    strokeWeight(0.01);
    line(a.x, a.y, b.x, b.y);
  }
}
