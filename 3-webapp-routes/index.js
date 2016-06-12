var express = require('express');
var routes = require('./routes/index')

var app = express();
app.use('/hello', routes);

app.get('/', function(req, res) {
    res.sendStatus(200)
});

app.listen(3000, function() {
    console.log("App running!")
})

