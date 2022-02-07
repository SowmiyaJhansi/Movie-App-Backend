var express = require('express');
var router = express.Router();

router.get('/artist', function (req, res) {
  res.send('artist page');
})

module.exports = router;

var express = require('express');
var router = express.Router();

var artist_controller = require('../controllers/artistController');

router.get('/movie/create', movie_controller.GET /artists);