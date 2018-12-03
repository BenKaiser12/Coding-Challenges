var express = require('express'),
  app = express();
var ejs = require('ejs');
var port = 8080;
var projectRoutes = require('./project-list');

// Set engine
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('Projects'));

// Get home page
app.get('/', function(req, res) {
  res.render(__dirname + '/views/home.html');
});

// Add Project Routes from Project List
app.use('/projects', projectRoutes);

// Start Server
app.listen(port, function() {
  console.log(`App started on port ${port}`);
});
