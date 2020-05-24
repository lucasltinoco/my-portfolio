import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'eng'
  },
  mutations: {
    setLang(state, langName) {
      state.lang = langName;
    }
  }
})