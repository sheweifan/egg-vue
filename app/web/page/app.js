'use strict'

import Entry from 'framework/app.js'
import app from './app.vue'

import createStore from '../store'
import createRouter from '../router'

export default new Entry({
  index: app,
  options: {
    base: '/'
  },
  createStore,
  createRouter
}).bootstrap()
