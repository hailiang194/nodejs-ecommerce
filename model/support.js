const config = require('../config');
const mongoose = require('mongoose');
const connection = require('../dbconnection');

const SupportSchema = new mongoose.Schema({
  name: String //Thong tin ve chinh sach ho tro khi mua hang
});

module.exports = connection.model(config.db.collections.support, SupportSchema);
