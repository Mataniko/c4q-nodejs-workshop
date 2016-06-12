var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    // res.send("Hello");

    res.render('index', {
        title: 'My First App',
        name: 'Matan'
    });
})

module.exports = router;