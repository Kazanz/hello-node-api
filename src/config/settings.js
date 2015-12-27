var path       = require('path');

var settings = {
  path       : path.normalize(path.join(__dirname, '..')),
  port       : process.env.NODE_PORT || 3000,
  database   : {
    protocol : "postgresql",
    query    : { pool: true },
    host     : "127.0.0.1",
    database : "vagrant",
    user     : "vagrant",
    password : ""
  }
};

module.exports = settings;
