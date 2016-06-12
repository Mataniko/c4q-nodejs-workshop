var express = require('express');
var routes = require('./routes/index')
var app = express();

app.set('view engine', 'jade')

app.use('/hello', routes);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'My First App',
        name: 'Matan'
    });
});

app.listen(3000, function() {
    console.log("App running!")
})

