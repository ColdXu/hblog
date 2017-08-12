var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: String,
    describe: String,
    createDate: String,
    modifyDate: String,
    status: String,
    pv: 0
});

module.exports = mongoose.model('article', articleSchema);


