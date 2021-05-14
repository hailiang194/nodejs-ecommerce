const log = (message) => {
  console.log((new Date()).toGMTString() +  ': ' + message);
};

const error = (message) => {
  log('[ERROR]' + message);
};

const request = (request) => {
  log('[' + request.method + '] at ' + request.originalUrl);
}

exports.log = log;
exports.error = error;
exports.request = request;
