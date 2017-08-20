import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: {
      sidebar: false
    }
  },
  getters: {},
  mutations: {
    setSidebar(state, s) {
      state.layout.sidebar = s
    }
  },
  actions: {}
})