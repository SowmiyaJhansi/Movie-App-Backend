var express = require('express');
var router = express.Router();

router.get('/user', function (req, res) {
  res.send('user page');
})

module.exports = router;