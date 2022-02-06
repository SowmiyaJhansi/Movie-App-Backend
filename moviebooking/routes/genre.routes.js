var express = require('express');
var router = express.Router();

router.get('/genre', function (req, res) {
  res.send('genre page');
})

module.exports = router;