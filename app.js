var express  = require("express"),  
    app      = express(),
    bodyParser  = require("body-parser"),
    http     = require("http"),
    server   = http.createServer(app),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    TVShowModel = require("./models/tvshow"),
    TVShowCtrl = require('./controllers/tvshows');
 


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json 
app.use(bodyParser.json())

app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

var tvshows = express.Router();

tvshows.route('/tvshows')
    .get(TVShowCtrl.findAllTVShows)
    .post(TVShowCtrl.addTVShow);

app.use(router);
app.use(tvshows); 

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});