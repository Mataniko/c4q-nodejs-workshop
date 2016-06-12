var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema( {
    username: String,    
    password: String,
    created: Date,
    updated: Date
})

UserSchema.pre('save', function(next) {
    this.created = this.created || new Date();
    this.updated = new Date();

    next();
});

var UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel