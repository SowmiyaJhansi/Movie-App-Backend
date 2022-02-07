var express = require('express');
var router = express.Router();

router.get('/movie', function (req, res) {
  res.send('movie page');
})

module.exports = router;

var express = require('express');
var router = express.Router();

var movie_controller = require('../controllers/movieController');

router.get('/movie/create', movie_controller.GET /movies);
router.get('/movie/create', movie_controller.GET /movies /PUBLISHED );
router.get('/movie/create', movie_controller.GET /movies /RELEASED);
router.get('/movie/create', movie_controller.GET /movies/{movieId});