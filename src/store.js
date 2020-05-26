import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'eng',
    theme: ''
  },
  mutations: {
    setLang(state, langName) {
      state.lang = langName;
    },
    setTheme(state, themeName) {
      state.theme = themeName
    }
  }
})