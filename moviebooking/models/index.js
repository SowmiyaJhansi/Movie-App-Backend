function Models(mongoose) {
    var Artist = require('./artist')(mongoose);
    var Genre = require('./genre')(mongoose);
    var Movies = require('./movie')(mongoose);
    var User = require('./user')(mongoose);
}
module.exports = Models;

const bodyParser = require('body-parser');
const app1 = express();

app1.use(bodyParser.json());

var express = require('express')
var cors = require('cors')
var app = express()
 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
  });
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

var express = require("express");
var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res){
    res.send('Movie App');
});

app.listen(app.get('port'));