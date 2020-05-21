<template>
  <div id="app">
    <Header />
    <Home />
    <WhoIAm />
    <WhatIDo />
    <MyProjects />
    <ContactMe />
  </div>
</template>

<script>
import Home from "./components/Home";
import WhoIAm from "./components/WhoIAm";
import WhatIDo from "./components/WhatIDo";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Home,
    WhoIAm,
    WhatIDo,
    MyProjects,
    ContactMe,
    Header
  },
  methods: {
    redirectUrl() {
      const url = location.href;
      const baseUrl = "http://localhost:8080/";

      switch (url) {
        case baseUrl:
          location.href = `${baseUrl}#home`;
          break;
        case `${baseUrl}#home`:
          location.href = `${baseUrl}#home`;
          break;
        case `${baseUrl}#who-i-am`:
          location.href = `${baseUrl}#who-i-am`;
          break;
        case `${baseUrl}#what-i-do`:
          location.href = `${baseUrl}#what-i-do`;
          break;
        case `${baseUrl}#my-projects`:
          location.href = `${baseUrl}#my-projects`;
          break;
        case `${baseUrl}#contact-me`:
          location.href = `${baseUrl}#contact-me`;
          break;
        default:
          location.href = `${baseUrl}#home`;
      }
    }, 
    monitorScroll(scrollableElement) {
      setInterval(() => {
        scrollableElement.addEventListener(
          "wheel",
          this.findScrollDirection
        );
      }, 500)
    },
    findScrollDirection(event) {
      let delta;
      if (event.wheelDelta) {
        delta = event.wheelDelta;
      } else {
        delta = -1 * event.deltaY;
      }
      this.movePage(delta)
    },
    movePage(delta) {
      const url = location.href
      const baseUrl = "http://localhost:8080/";
      const up = delta > 0 ? true : false
      switch (url) {
        case `${baseUrl}#home`:
          up ? null : location.href = `${baseUrl}#who-i-am`
          break;
        case `${baseUrl}#who-i-am`:
          up ? location.href = `${baseUrl}#home` : location.href = `${baseUrl}#what-i-do`
          break;
        case `${baseUrl}#what-i-do`:
          up ? location.href = `${baseUrl}#who-i-am` : location.href = `${baseUrl}#my-projects`
          break;
        case `${baseUrl}#my-projects`:
          up ? location.href = `${baseUrl}#what-i-do` : location.href = `${baseUrl}#contact-me`
          break;
        case `${baseUrl}#contact-me`:
          up ? location.href = `${baseUrl}#my-projects` : null
          break;
        default:
      }
    }
  },
  mounted() {
    this.redirectUrl();
    this.monitorScroll(document.getElementById("app"))
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@200&display=swap");

* {
  font-family: "Jost", sans-serif;
}

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  margin: 0;
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  line-height: 1.5;
  color: #000;
  font-size: 59.8%;
  background: linear-gradient(to left, #ece9e6, #ffffff);
}

section {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-size: cover;
  scroll-snap-align: center;
}
</style>
