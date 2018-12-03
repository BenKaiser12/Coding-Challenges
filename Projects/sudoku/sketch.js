var cells = [];
var grid;
var sudokuSeed = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80]
]

function setup() {

  var canvas = createCanvas(400, 400);
  canvas.parent('gameBoard')

  // Create Grid
  cols = 9;
  rows = 9;
  var x = 0;
  var y = 0;
  var cWidth = width / 9;
  var cHeight = cWidth;

  grid = make2DArray(cols, rows)
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * cWidth, j * cHeight, sudokuSeed[i][j]);
    }
  }
}

function draw() {
  // Draw Background
  stroke(0)
  strokeWeight(4)
  background(55)
  

  // Draw Grid
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}


// Helper Functions
function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr;
}