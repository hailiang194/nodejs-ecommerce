const config = require('../config');
const log = require('../lib/log');
const Support = require('../model/support');

exports.add = (request, response) => {
  const addSupport = () => {
    const support = new Support({
      name: request.body.name
    })

    try{
      support.save();
      log.log('Support has been saved');
    }catch(error)
    {
      log.error(error);
      throw error;
      return {};
    }

    return support
  };

  response.send(addSupport());
};
