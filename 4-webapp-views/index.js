var express = require('express');
var routes = require('./routes/index')
var pug = require('pug')

var app = express();

app.set('view engine', 'jade')
app.use('/', routes);

app.listen(3000, function() {
    console.log("App running!")
})

