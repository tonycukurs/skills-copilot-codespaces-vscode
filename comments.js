// Create web server
var express = require('express');
var app = express();

// Create a route for the path /comments
app.get('/comments', function(req, res) {
  // Print out the comments
  res.send('Comments: <br> Comment1 <br> Comment2');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
