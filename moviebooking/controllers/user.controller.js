var Artist = require('../models/user');

exports.userid = function(req, res) {
    res.send('NOT IMPLEMENTED: user id');
};

exports.email = function(req, res) {
    res.send('NOT IMPLEMENTED: email');
};

exports.first_name = function(req, res) {
    res.send('NOT IMPLEMENTED:  first_name');
};

exports.last_name = function(req, res) {
    res.send('NOT IMPLEMENTED:  last_name');
};

exports.username = function(req, res) {
    res.send('NOT IMPLEMENTED:  username');
};

exports.contact = function(req, res) {
    res.send('NOT IMPLEMENTED:  contact');
};

exports.password = function(req, res) {
    res.send('NOT IMPLEMENTED:  password');
};

exports.role = function(req, res) {
    res.send('NOT IMPLEMENTED:  role');
};

exports.isLoggedIn = function(req, res) {
    res.send('NOT IMPLEMENTED:  isLoggedIn');
};

const User = require('../controllers/user');
route.post('/auth', User.auth);

route.post('/register', User.register);
const signUp = req.body.signUp;

const login = req.body.login;

const logout = req.body.logout;