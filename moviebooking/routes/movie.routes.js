var express = require('express');
var router = express.Router();

router.get('/movie', function (req, res) {
  res.send('movie page');
})

module.exports = router;