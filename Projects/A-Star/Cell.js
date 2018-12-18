class Cell {
  constructor(i, j, w, h) {
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.ht = h;
    this.w = w;
    this.i = i;
    this.j = j;
    this.neighbors = [];
    this.prev;
    this.wall = false;
  }

  createWall() {
    this.wall = true;
  }

  show(col) {
    noStroke();
    fill(col);
    if (this.wall) {
      fill(0);
    }
    rect(this.i * w, this.j * h, w, h);
  }

  addNeighbors(grid) {
    var i = this.i;
    var j = this.j;

    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
    // Diagonals
    if (i > 0 && j > 0) {
      this.neighbors.push(grid[i - 1][j - 1]);
    }
    if (i < cols - 1 && j > 0) {
      this.neighbors.push(grid[i + 1][j - 1]);
    }
    if (i > 0 && j < rows - 1) {
      this.neighbors.push(grid[i - 1][j + 1]);
    }
    if (i < cols - 1 && j < rows - 1) {
      this.neighbors.push(grid[i + 1][j + 1]);
    }
  }
}
