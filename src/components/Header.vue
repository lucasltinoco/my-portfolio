<template>
  <header class="header">
    <div class="title svg-fade">
      <transition name="fade" mode="out-in">
        <img
          v-if="theme === 'theme-dark'"
          src="../assets/imgs/logo-dark.svg"
          alt="logo"
          height="50px"
          width="75px"
          key="dark"
        />
        <img
          v-else-if="theme === 'theme-light'"
          src="../assets/imgs/logo-light.svg"
          alt="logo"
          height="50px"
          width="75px"
          key="light"
        />
      </transition>
      <h1>lucas l. tinoco</h1>
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
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: mapState(["lang", "theme"])
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
  align-items: flex-end;
  padding: 0px;
  margin: 0px 0px 0px 4vw;
}

header .title h1 {
  color: var(--primary-txt-color);
  font-weight: bold;
  transition: 0.5s;
  padding-left: 10px;
  margin: 0;
}

header .nav {
  margin: 0px 4vw 0px 0px;
  padding: 0px 0px 9px 0px;
  display: flex;
  align-items: flex-end;
}

header .nav a {
  position: relative;
  margin: 0px 0px 0px 15px;
  text-decoration: none;
  font-weight: 700;
  font-size: var(--txt-size);
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

@media only screen and (max-width: 1024px) {
  header .title h1 {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  header .nav {
    display: none;
  }
  header .dropdown-menu {
    display: flex;
    align-items: flex-end;
    font-size: 30px;
  }
  header .dropdown-menu i {
    font-size: 30px;
    margin-right: 4vw;
    padding: 0px 0px 9px 0px;
  }
}
</style>