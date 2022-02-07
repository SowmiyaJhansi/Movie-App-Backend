var express = require('express');
var router = express.Router();

router.get('/user', function (req, res) {
  res.send('user page');
})

module.exports = router;

exports.auth = function(req, res){

}

exports.register = function(req, res){

}

const User = require('../routes/user');
route.post('/auth', signup.auth);

route.post('/register', login.register);

route.post('/register', logout.register);

route.post('/register', getCouponCode);

route.post('/register', bookShow);
