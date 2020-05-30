<template>
  <header class="header">
    <div class="title svg-fade">
      <transition name="fade" mode="out-in">
        <img
          v-if="theme === 'theme-dark'"
          src="../assets/imgs/logo-dark.svg"
          alt="logo"
          key="dark"
        />
        <img
          v-else-if="theme === 'theme-light'"
          src="../assets/imgs/logo-light.svg"
          alt="logo"
          key="light"
        />
      </transition>
      <h1 class="name-title">lucas l. tinoco</h1>
      <h1 class="page-title">/ {{currentPage}}</h1>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="lang == 'eng'" class="nav" key="eng">
        <a href="#home">home</a>
        <a href="#who-i-am">who i am</a>
        <a href="#what-i-do">what i do</a>
        <a href="#my-projects">my projects</a>
        <a href="#contact-me" style="margin-right=0px;">contact me</a>
      </div>
      <div v-else-if="lang === 'por'" class="nav" key="por">
        <a href="#home">início</a>
        <a href="#who-i-am">quem sou</a>
        <a href="#what-i-do">o que faço</a>
        <a href="#my-projects">meus projetos</a>
        <a href="#contact-me">entre em contato</a>
      </div>
    </transition>
    <div class="dropdown-menu">
      <i class="im im-menu-list"></i>
      <div v-if="lang == 'eng'" class="dropdown-nav" style="display: none;">
        <a href="#home">home</a>
        <a href="#who-i-am">who i am</a>
        <a href="#what-i-do">what i do</a>
        <a href="#my-projects">my projects</a>
        <a href="#contact-me" style="margin-right=0px;">contact me</a>
      </div>
      <div v-else-if="lang === 'por'" class="dropdown-nav" style="display: none;">
        <a href="#home">início</a>
        <a href="#who-i-am">quem sou</a>
        <a href="#what-i-do">o que faço</a>
        <a href="#my-projects">meus projetos</a>
        <a href="#contact-me">entre em contato</a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: mapState(["lang", "theme", "currentPage"]),
  methods: {
    changeNavClass(navElement) {
      navElement.style.display === "none"
        ? (navElement.style.display = "inline-block")
        : (navElement.style.display = "none");
    }
  },
  mounted() {
    window.onclick = () => {
      const navElement = document.querySelector(".dropdown-nav");
      if (navElement.style.display === "inline-block") {
        this.changeNavClass(navElement);
      } else if (event.target.matches(".im-menu-list")) {
        this.changeNavClass(navElement);
      }
    };
  }
};
</script>

<style>
header {
  position: fixed;
  top: 2vh;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 64px;
}

header .title {
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px 0px 0px 4vw;
}

header h1 {
  font-size: calc(var(--txt-size) * 2);
  color: var(--primary-txt-color);
  font-weight: bold;
  margin: 0;
}

header .name-title {
  padding-left: 10px;
}

header .page-title {
  display: none;
}

header .nav {
  margin: 0px 4vw 0px 0px;
  padding: 0px;
  display: flex;
  align-items: center;
}

header .nav a {
  position: relative;
  margin: 0px 0px 0px 15px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  color: var(--secondary-txt-color);
  transition: 0.5s;
}

header .nav a::after {
  position: absolute;
  bottom: -3px;
  left: 0;
  content: "";
  width: 0;
  height: 3px;
  transition: all 0.5s linear;
}

header .nav a:hover::after,
header .nav a.current-page::after {
  width: 100%;
  background-color: var(--primary-txt-color);
}

header .dropdown-menu {
  display: none;
}

header .dropdown-nav {
  position: absolute;
  top: 60px;
  right: 4vw;
  background-color: var(--bg-color);
  transition: 0.5s;
  min-width: 110px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  font-size: calc(var(--txt-size) * 1.5);
}

header .dropdown-nav a {
  color: var(--secondary-txt-color);
  transition: 0.5s;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: right;
}

header .title img {
  height: calc(var(--txt-size) * 10 / 3);
  width: calc(var(--txt-size) * 20 / 3);
}


@media only screen and (max-width: 1024px) {
  header .title .name-title {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  header .nav {
    display: none;
  }
  header .dropdown-menu {
    display: flex;
    align-items: center;
  }
  header .dropdown-menu i {
    font-size: calc(var(--txt-size) * 2);
    margin-right: 4vw;
    padding: 0px;
    cursor: pointer;
  }

  header .page-title {
    display: flex;
  }
}
</style>