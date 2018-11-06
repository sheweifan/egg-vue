import Vue from 'vue';
import VueRouter from 'vue-router';
import index from 'page/index'
Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: index
      }
    ]
  });
}

