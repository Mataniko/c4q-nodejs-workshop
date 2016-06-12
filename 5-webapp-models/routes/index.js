var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello");
})

router.get('/:name', function(req, res) {
    res.send("Hello " + req.params.name);
})

module.exports = router;