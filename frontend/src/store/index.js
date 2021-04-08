/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navIndex: "home",
    user: JSON.parse(localStorage.getItem("user")) || null
  },
  mutations: {
    SET_INDEX(state, params) {
      state.navIndex = params;
    },
    SET_USER(state, params) {
      state.user = params;
    }
  },
  actions: {},
  modules: {}
});
