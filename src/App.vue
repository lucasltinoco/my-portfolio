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
  data: function() {
    return {
      baseUrl: "http://localhost:8080/",
      pages: ["home", "who-i-am", "what-i-do", "my-projects", "contact-me"]
    };
  },
  methods: {
    redirectUrl() {
      const url = location.href;
      const page = url.split("#")[1];

      if (url === this.baseUrl) {
        location.href = `${this.baseUrl}#${this.pages[0]}`;
      } else if (url === `${this.baseUrl}#${page}`) {
        location.href = `${this.baseUrl}#${page}`;
      } else {
        location.href = `${this.baseUrl}#${this.pages[0]}`;
      }
    },
    monitorScroll(scrollableElement) {
      setInterval(() => {
        scrollableElement.addEventListener("wheel", this.findDelta);
      }, 500);
    },
    findDelta(event) {
      let delta;
      if (event.wheelDelta) {
        delta = event.wheelDelta;
      } else {
        delta = -1 * event.deltaY;
      }
      this.movePage(delta);
    },
    movePage(delta) {
      const url = location.href;
      const page = url.split("#")[1];
      const pageIndex = this.pages.indexOf(page);
      const direction = delta > 0 ? "up" : "down";

      if (direction === "up") {
        pageIndex === 0
          ? ""
          : (location.href = `${this.baseUrl}#${this.pages[pageIndex - 1]}`);
      } else if (direction === "down") {
        pageIndex === this.pages.length - 1
          ? ""
          : (location.href = `${this.baseUrl}#${this.pages[pageIndex + 1]}`);
      }
    }
  },
  mounted() {
    this.redirectUrl();
    this.monitorScroll(document.getElementById("app"));
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
