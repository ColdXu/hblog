var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    createDate: String,
    rule: Array
});

//  与users集合关联
module.exports = mongoose.model('user', userSchema);


