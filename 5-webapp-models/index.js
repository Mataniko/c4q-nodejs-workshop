var express = require('express');
var routes = require('./routes/index')
var users = require('./routes/user')
var pug = require('pug')
var bodyParser = require('body-parser');

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/models')

var app = express();

app.set('view engine', 'jade')
app.use(bodyParser.json());
app.use('/', routes);
app.use('/user', users)


app.listen(3000, function() {
    console.log("App running!")
})

