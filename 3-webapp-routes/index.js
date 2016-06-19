var express = require('express');
var hello = require('./routes/index')

var app = express();
app.use('/hello', hello);

app.get('/', function(req, res) {
    res.sendStatus(200)
});

app.listen(3000, function() {
    console.log("App running!")
})

