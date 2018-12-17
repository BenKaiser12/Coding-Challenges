var express = require('express');
var router = express.Router();

// PROJECT PATHS
// Maze Generator
router.get('/maze-generator', function(req, res) {
  res.render(__dirname + '/Projects/maze-generator/index.html');
});

// Sudoku
router.get('/sudoku', function(req, res) {
  res.render(__dirname + '/Projects/sudoku/index.html');
});

// A* Pathfinding
router.get('/a-star', function(req, res) {
  res.render(__dirname + '/Projects/A-star/index.html');
});

module.exports = router;
