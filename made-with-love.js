require('express');

var middleware = function(options){

  options = options || {};
  var ingredient = options.ingredient || '<3';

  return function(req, res, next){
    res.header('x-made-with', ingredient); 
    next();
  }
};

exports.middleware = middleware;
