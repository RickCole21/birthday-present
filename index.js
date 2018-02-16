// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

console.log('static path:', path.join(__dirname, 'src'))
// Routing
app.use(express.static(path.join(__dirname, 'src')));
