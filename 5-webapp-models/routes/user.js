var express = require('express');
var router = express.Router();

var User = require('./../models/user')

router.get('/', function(req, res) {    
    User.find({}, function(err, docs) {
        res.render('user', { users: docs })
    })
});

router.get('/new', function(req, res) {
    res.render('new_user');
});

router.post('/', function(req, res) {
    
    var user = new User({ username: req.body.username, password: req.body.password});
    
    user.save(function(err) {
        if (err) res.send(err);

        console.log(user);
        res.send('User created!');     
    })    
});

module.exports = router;