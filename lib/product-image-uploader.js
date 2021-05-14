const fs = require('fs');
const config = require('../config');
const log = require('./log');

getStoragePath = (filename) => {
  return config.image_storage_folder_name + '/' + 
    'PRO_' + Date.now() + '_' + filename;
};

uploadFile = (file, isLog = true) => {
  const storagePath = getStoragePath(file.name);
  if(isLog) log.log('Saving ' + storagePath + '...') 

  fs.writeFile(storagePath, file.data, 'ascii', (error) => {
    if(error) {
      if(isLog) log.error('Saving fail'); 
    }
  });
  if(isLog) log.log(storagePath + ' saved');
  return storagePath;
};


exports.saveFiles = (files, isLog = true) => {
  //no images choosen
  if(!files || !files.images)
  {
    return [{path: config.image_storage_folder_name + '/no-image.jpg'}];
  }

  //Upload only one image
  if(!Array.isArray(files.images))
  {
    return [{path: uploadFile(files.images)}];
  }

  //Upload multiple images
  images = []
  for(var i = 0; i < files.images.length; ++i){
    images.push({path: uploadFile(files.images[i])});
  }

  return images;
};
