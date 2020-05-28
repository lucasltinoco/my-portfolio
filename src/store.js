import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'eng',
    theme: '',
    currentPage: ''
  },
  mutations: {
    setLang(state, langName) {
      state.lang = langName;
    },
    setTheme(state, themeName) {
      state.theme = themeName
    },
    setCurrentPage(state, pageName) {
      if(state.lang === "eng") {
        switch (pageName) {
          case "home":
            state.currentPage = "home"
            break;
          case "who-i-am":
            state.currentPage = "who i am"
            break;
          case "what-i-do":
            state.currentPage = "what i do"
            break;
          case "my-projects":
            state.currentPage = "my projects"
            break;
          case "contact-me":
            state.currentPage = "contact me"
            break;
          default:
            break;
        }
      } else if(state.lang === "por") {
        switch (pageName) {
          case "home":
            state.currentPage = "início"
            break;
          case "who-i-am":
            state.currentPage = "quem sou"
            break;
          case "what-i-do":
            state.currentPage = "o que faço"
            break;
          case "my-projects":
            state.currentPage = "meus projetos"
            break;
          case "contact-me":
            state.currentPage = "entre em contato"
            break;
          default:
            break;
        }
      }
    }
  }
})