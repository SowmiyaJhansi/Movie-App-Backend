function Models(mongoose) {
    var Artist = require('./artist')(mongoose);
    var Genre = require('./genre')(mongoose);
    var Movies = require('./movie')(mongoose);
    var User = require('./user')(mongoose);
}
module.exports = Models;