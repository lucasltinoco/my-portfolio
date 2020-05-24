<template>
  <header>
    <h1>lucas l. tinoco</h1>
    <div v-if="lang == 'eng'" class="nav">
      <a href="#home">home</a>
      <a href="#who-i-am">who i am</a>
      <a href="#what-i-do">what i do</a>
      <a href="#my-projects">my projects</a>
      <a href="#contact-me">contact me</a>
    </div>
    <div v-else-if="lang === 'por'" class="nav">
      <a href="#home">início</a>
      <a href="#who-i-am">quem eu sou</a>
      <a href="#what-i-do">o que faço</a>
      <a href="#my-projects">meus projetos</a>
      <a href="#contact-me">entre em contato</a>
    </div>
    
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
  top: 15px;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 59px;
  font-size: 1rem;
}

header h1 {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0px;
  margin: 0px 0px 0px 50px;
  font-weight: bold;
  color: var(--primary-txt-color);
  transition: 0.5s;
}

header .nav {
  margin: 0px 50px 0px 0px;
  padding: 0;
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
  font-size: 1.2rem;
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
header .nav a.currentPage::after {
  width: 100%;
  background-color: var(--primary-txt-color);
}
</style>