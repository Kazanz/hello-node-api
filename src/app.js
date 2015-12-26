var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello world');
});

app.listen(3000);
