var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    //db: 'mongodb://localhost/multivision',
    db: 'mongodb://tripstomp:waxnepke@ds031641.mongolab.com:31641/calmapit',

    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    //db: 'mongodb://jeames:multivision@ds053178.mongolab.com:53178/multivision',
    db: 'mongodb://tripstomp:waxnepke@ds031641.mongolab.com:31641/calmapit',

    port: process.env.PORT || 80
  }
}