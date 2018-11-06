'use strict';
const path  = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540955000313_4485';

  // add your config here
  config.middleware = [];
  
  config.vuessr = {
    layout: path.join(appInfo.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view')
    }
  };

  return config;
};
