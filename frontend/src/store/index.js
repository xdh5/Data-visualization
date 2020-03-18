/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navIndex: "home",
    mode: localStorage.getItem("mode") || "normal"
  },
  mutations: {
    SET_INDEX(state, params) {
      state.navIndex = params;
    },
    SET_MODE(state, params) {
      state.mode = params;
    }
  },
  actions: {},
  modules: {}
});
