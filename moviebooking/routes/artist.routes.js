var express = require('express');
var router = express.Router();

router.get('/artist', function (req, res) {
  res.send('artist page');
})

module.exports = router;