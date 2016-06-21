var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    body: String,
    author: String,    
    created_at: Date,
    updated_at: Date

})

ArticleSchema.pre('save', function(next) {    
    this.created_at = this.created_at || new Date();
    this.updated_at = new Date();
    next();
});

var ArticleModel = mongoose.model('article', ArticleSchema)

module.exports = ArticleModel