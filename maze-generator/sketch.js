// Global Variables
var grid = []

function setup() {
  var canvas = createCanvas(1000, 700)
  canvas.parent('mazeBoard')

  // Setup Grid
  w = 25;
  var rows = height / w;
  var cols = width / w
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j, w)
      grid.push(cell)
    }
  }

  // Set Start Cell to visited
  grid[0].visited = true;
}

function draw() {
  background(51)

  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

function checkNeighbors() {

}