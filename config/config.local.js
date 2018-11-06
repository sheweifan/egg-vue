'use strict';

const EasyWebpack = require('easywebpack-vue')

module.exports = app => {
  const exports = {};
    
  // 用于本地开发时，读取 Webpack 配置，然后构建
  exports.webpack = {
    webpackConfigList: EasyWebpack.getWebpackConfig()
  }

  return exports
}