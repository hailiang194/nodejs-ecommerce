const config = require('./config')
const log = require('./lib/log');
const mongoose = require('mongoose');

// const HOSTNAME = 'localhost';
// const PORT = '27017';
// const DATABASE_NAME = 'DienMay';

const URL = 'mongodb://' + config.db.host + ":" + config.db.port + "/" + config.db.name;

module.exports = mongoose.createConnection(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if(error){
    log.error(error);
    throw error;
  }
  else{
    log.log('Connecting to ' + URL);
  }
});
