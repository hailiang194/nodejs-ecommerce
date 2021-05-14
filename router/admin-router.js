const express = require('express');
const config = require('../config');
const log = require('../lib/log');

const addProductController = require('../controller/add-product-controller')
const addSupportController = require('../controller/add-support-controller');

const router = express.Router();

router.use((request, response, next) =>{
  log.request(request);
  next();
});

router.post('/add-product', (request, response) => {
  addProductController.add(request, response);
});

router.post('/add-support', (request, response) => {
  console.log('HERE');
  addSupportController.add(request, response);
});

module.exports = router;
