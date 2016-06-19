var express = require('express');
var hello = require('./routes/index')
var app = express();

app.set('view engine', 'jade')

app.use('/hello', hello);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'My First App',
        name: 'Matan'
    });
});

app.listen(3000, function() {
    console.log("App running!")
})

