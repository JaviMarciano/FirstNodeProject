var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tvshowSchema  = new Schema({
    title: { type: String },
    year:  { type: Number },
    genre: { type: String, enum:
        ['Drama','Fantasy', 'Sci-Fi']}

});

module.exports = mongoose.model('TVShow', tvshowSchema);