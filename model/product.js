const config = require('../config');
const mongoose = require('mongoose');
const connection = require('../dbconnection');

//Schema cua san pham
const ProductSchema = new mongoose.Schema({
  name: String, //ten san pham
  oldPrice: mongoose.Decimal128, //gia cu, neu moi nhap hay de no cung gia tri voi price
  price: mongoose.Decimal128, //gia hien tai
  description: String, //mo ta san pham
  specification: String, //thong so san pham
  brand: String, //ten thuong hieu
  images: [{path: String}], //duong dan toi cac anh
  isSoldOut: Boolean, //da het hang hay chua
  supportedFeatures: [{type: mongoose.Schema.Types.ObjectId, ref: config.db.collections.support}], //id cua cac tinh nang ho tro khi mua san pham
  productType: String //danh muc cua san pham
});

module.exports = connection.model(config.db.collections.product, ProductSchema); 

