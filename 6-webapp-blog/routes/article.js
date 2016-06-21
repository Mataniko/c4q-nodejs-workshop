var express = require('express');
var router = express.Router();
var ArticleModel = require('./../models/article')
var bodyParser = require('body-parser')


router.get('/', function(req, res) {
    var allarticles = ArticleModel.
    find({}).
    sort({ updated_at: -1 }).
    exec(function(err, docs) {        
        res.render('article', { articles: docs, summary: true });
    });        
});

router.get('/new', function(req, res) {
    res.render('new_article');
});

router.get('/:id', function(req, res) {
    ArticleModel.findById(req.params.id, function(err, doc) {
        if (err) {
            res.status(404).end();
            return;
        }

        res.render('article', { articles: [ doc ], summary: false});
    });
});

router.post('/', function(req, res) {
    var article = new ArticleModel({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author || "Unknown"        
    });

    article.save(function(err) {
        if (err) throw err;
        res.redirect('/article');
    });
});

router.put('/:id', function(req, res) {    
    ArticleModel.findById(req.params.id, function(err, doc) {        
        doc.title = req.body.title || doc.title;
        doc.body = req.body.body || doc.body;
        doc.author = req.body.author || doc.author;

        doc.save(function(err) {
            if (err) throw err;
            
            res.json(doc);
        });   
    });
});

router.delete('/:id', function(req, res) {    
    ArticleModel.findById(req.params.id, function(err, doc) {   

        if (!doc) {
            res.json({ message: "article not found"})
            return;
        }     
       doc.remove(function(err) {
            if (err) throw err;
            
            res.json(doc);
        });   
    });
});

module.exports = router;