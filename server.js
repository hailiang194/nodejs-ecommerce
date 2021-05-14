const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const config = require('./config');
const log = require('./lib/log');

const app = express();
const server = http.createServer(app);

const adminRouter = require('./router/admin-router')

app.use(fileUpload());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use('/admin', adminRouter);

server.listen(config.server.port, config.server.host, () => {
  var host = server.address().address;
  var port = server.address().port;

  // console.log('Listening at http://%s:%s', host, port);
  log.log('Listening at http://' + host + ":" + port);
});
