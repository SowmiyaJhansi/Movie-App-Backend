var express = require('express');
var router = express.Router();

router.get('/genre', function (req, res) {
  res.send('genre page');
})

module.exports = router;

var express = require('express');
var router = express.Router();

var genre_controller = require('../controllers/genreController');

router.get('/movie/create', genre_controller.GET /genres);