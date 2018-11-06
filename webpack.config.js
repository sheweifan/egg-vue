'use strict';
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    app: 'app/web/page/app.js'
  },
  alias: {
    component: 'app/web/component',
    framework: 'app/web/framework',
    page: 'app/web/page',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js',
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {},
  plugins: {

  },
  done() {

  }
};
