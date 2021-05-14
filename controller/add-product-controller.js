const fs = require('fs');
const config = require('../config');
const log = require('../lib/log');
const productImageUploader = require('../lib/product-image-uploader');
const Product = require('../model/product');

exports.add = (request, response) => {
  //save files
  var files = request.files;
  prodcutImages = productImageUploader.saveFiles(files);

  //insert to database
  log.log('Inserting the product to database...');
  const addedProduct = () => {
    const product = new Product({
      name: request.body.name,
      oldPrice: request.body.price,
      price: request.body.price,
      description: request.body.description,
      specification: request.body.specification,
      brand: request.body.brand,
      images: prodcutImages,
      isSoldOut: false,
      supportedFeatures: [],
      productType: request.body.type
    });

    try{
      product.save();
      log.log('Product has been saved');
    }catch(error){
      log.error(error);
      throw error;
      return {}
    }

    return product;
  }

  response.send(addedProduct());
};
