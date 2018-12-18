var w;
var h;
var cols = 30;
var rows = 30;
var grid = new Array(cols);
var openSet = [];
var closedSet = [];
var start;
var end;
var path = [];
noSol = false;

function removeFromArray(arr, elt) {
  for (var i = arr.length; i >= 0; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

function heuristic(a, b) {
  var d = dist(a.i, a.j, b.i, b.j);
  return d;
}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('canvas');

  // Making 2D array called Grid
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  // Add cells to Grid
  w = width / cols;
  h = height / rows;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid[i][j] = new Cell(i, j, w, h);
      if (random(0, 1) < 0.25) {
        grid[i][j].createWall();
      }
    }
  }

  // Add Neightbors
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid[i][j].addNeighbors(grid);
    }
  }

  // Set Start and End
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];

  // Add start cell to open set
  openSet.push(start);
}

function draw() {
  // Algorithm
  if (openSet.length > 0) {
    // Keep going
    // Check Low F
    var lowF = 0;
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowF].f) {
        lowF = i;
      }
    }

    // Check if we are at end
    if (openSet[lowF] === end) {
      console.log('Done!');
      noLoop();
    }
    var current = openSet[lowF];

    // remove current from Open Set
    removeFromArray(openSet, current);

    // Add current to closed Set
    closedSet.push(current);

    // Check the Neighbors
    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];

      // Check if neighbor is in closed set
      if (!closedSet.includes(neighbor) && !neighbor.wall) {
        // If NOt...  G Score
        var tempG =
          current.g + dist(current.i, current.j, neighbor.i, neighbor.j);

        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
          }
        } else {
          neighbor.g = tempG;
          openSet.push(neighbor);
        }

        // Hueristic score
        neighbor.h = heuristic(neighbor, end);

        // F Score
        neighbor.f = neighbor.g + neighbor.h;

        // Came From
        neighbor.prev = current;
      }
    }
  } else {
    // No solution
    console.log('no solution');
    noLoop();
    return;
  }

  // Draw all the cells
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid[i][j].show(255);
    }
  }
  // Open Set is Green
  for (var i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }
  // Closed Set is red
  for (var i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }

  // backcalculate the shortest path
  path = [];
  var temp = current;
  path.push(temp);
  while (temp.prev) {
    path.push(temp.prev);
    temp = temp.prev;
  }

  // Draw the path
  for (var i = 0; i < path.length; i++) {
    path[i].show(color(0, 0, 255));
  }
}
