class Cell {
  constructor(i, j, w) {
    this.i = i;
    this.j = j;
    this.w = w;
    this.visited = false;
    this.walls = [true, true, true, true]; //top ,right, bottom, left
  }

  show() {
    var x = this.i * this.w;
    var y = this.j * this.w;
    var w = this.w;

    stroke(255);
    strokeWeight(2);

    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      fill(255, 0, 255);
      rect(x, y, w, w);
    }
  }
}
