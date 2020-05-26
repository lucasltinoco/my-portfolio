<template>
  <header class="header">
    <h1>lucas l. tinoco</h1>
    <transition name="fade" mode="out-in">
      <div v-if="lang == 'eng'" class="nav" key="eng">
        <a href="#home">home</a>
        <a href="#who-i-am">who i am</a>
        <a href="#what-i-do">what i do</a>
        <a href="#my-projects">my projects</a>
        <a href="#contact-me">contact me</a>
      </div>
      <div v-else-if="lang === 'por'" class="nav" key="por">
        <a href="#home">início</a>
        <a href="#who-i-am">quem sou eu</a>
        <a href="#what-i-do">o que faço</a>
        <a href="#my-projects">meus projetos</a>
        <a href="#contact-me">entre em contato</a>
      </div>
    </transition>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: mapState(["lang"])
};
</script>

<style>
header {
  position: fixed;
  top: 2vh;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 59px;
  font-size: var(--txt-size);
}

header h1 {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0px;
  margin: 0px 0px 0px 4vw;
  font-weight: bold;
  color: var(--primary-txt-color);
  transition: 0.5s;
}

header .nav {
  margin: 0px 4vw 0px 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
}

header .nav a {
  position: relative;
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
</style>