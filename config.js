var config = {};

//Storage config value
config.image_storage_folder_name = 'images';

//Server config value
// config.server_host = 'localhost';
// config.server_port = '8081';
config.server = {
  host: 'localhost',
  port: '8081'
};

//MongoDB config value
// config.db_hostname = 'localhost';
// config.db_port = '27017';
// config.db_name = 'DienMay';

config.db = {
  host: 'localhost',
  port: '27017',
  name: 'DienMay',
  collections: {
    product: 'SanPham',
    support: 'HoTro'
  }
}

//Collections on MongoDB

module.exports = config;
