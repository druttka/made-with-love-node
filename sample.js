var express = require('express');
var mwl = require('./made-with-love.js');
var app = express();

app.use(mwl.middleware());

app.get('/', function(req, res){
  res.send('hi');
});

app.listen(3000);
