// Global Variables
var cols;
var rows;
var grid = [];
var current;

function make2DArray(cols, rows) {
  var arr = new Array(rows);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function setup() {
  var canvas = createCanvas(1000, 700);
  canvas.parent('mazeBoard');

  // Setup Grid
  w = 100;
  var rows = height / w;
  var cols = width / w;

  grid = make2DArray(cols, rows);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      grid[i][j] = new Cell(i, j, w);
      console.log(grid[i][j]);
    }
  }

  // Set Start Cell to visited
  current = grid[0][0];
  current.visited = true;
}

function draw() {
  background(51);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      grid[j][i].show();
    }
  }
}
