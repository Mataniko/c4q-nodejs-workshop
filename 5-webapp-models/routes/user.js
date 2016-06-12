var express = require('express');
var router = express.Router();

var User = require('./../models/user')

router.get('/', function(req, res) {    
    
});

router.post('/', function(req, res) {
    
    var user = new User({ username: req.body.username, password: req.body.password});
    
    user.save(function(err) {
        if (err) res.send(err);

        console.log(user);
        res.send(user);
    })    
});

module.exports = router;