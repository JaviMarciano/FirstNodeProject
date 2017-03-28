var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');

exports.findAllTVShows = function (req, res){
    TVShow.find(function(err, tvshows){
        if(err) res.send(500, err.message);

        console.log('GET /Tvshows')
        res.status(200).jsonp(tvshows);
    });

};



exports.addTVShow = function(req, res){
    console.log('POST');
    console.log(req.body);

    var tvshow = new TVShow({
        title : req.body.title,
        year: req.body.year,
        genre: req.body.genre
    });

    tvshow.save(function(err, tvshow){
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(tvshow);
    });
};