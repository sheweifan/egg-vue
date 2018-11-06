'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default function createStore(initState = {}) {
  return new Vuex.Store({
    state: {
      reasons: 0
    },
    mutations: {
      updateReasons (state, reasons) {
        state.reasons = reasons
      }
    },
    actions: {
      getReason({commit}) {
        return axios.get('https://easy-mock.com/mock/59ac0e44e0dc6633419a174c/test/yuyue/reason')
          .then(res => {
            const resData = res.data
            console.log('updateReasons', resData.data)
            commit('updateReasons', resData.data)
          })
      }
    }
  })
}
