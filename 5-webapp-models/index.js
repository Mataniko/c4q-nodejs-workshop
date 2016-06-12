var express = require('express');
var hello = require('./routes/index')
var user = require('./routes/user')

var bodyParser = require('body-parser');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/models')

var app = express();

app.set('view engine', 'jade')
app.use(bodyParser.urlencoded());
app.use('/hello', hello);
app.use('/user', user)


app.get('/', function(req, res) {
    res.render('index', {
        title: 'My First App',
        name: 'Matan'
    });
});


app.listen(3000, function() {
    console.log("App running!")
})

