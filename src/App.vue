<template>
  <div id="app">
    <Header />
    <Home />
    <WhoIAm />
    <WhatIDo />
    <MyProjects />
    <ContactMe />
    <Toggles />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header";
import Home from "./components/Home";
import WhoIAm from "./components/WhoIAm";
import WhatIDo from "./components/WhatIDo";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Toggles from "./components/Toggles";

export default {
  name: "App",
  computed: mapState(["currentPage"]),
  components: {
    Home,
    WhoIAm,
    WhatIDo,
    MyProjects,
    ContactMe,
    Header,
    Toggles
  },
  data: function() {
    return {
      baseUrl: "http://localhost:8080/",
      pages: ["home", "who-i-am", "what-i-do", "my-projects", "contact-me"],
      lastAnimation: 0,
      quietPeriod: 500
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
      this.highlightPageTitle();
    },
    monitorScroll(scrollableElement) {
      scrollableElement.addEventListener("wheel", this.findDelta);
    },
    findDelta(event) {
      let delta;
      event.preventDefault();
      event.wheelDelta
        ? (delta = event.wheelDelta)
        : (delta = -1 * event.deltaY);
      this.movePage(event, delta);
    },
    movePage(event, delta) {
      const url = location.href;
      const page = url.split("#")[1];
      const pageIndex = this.pages.indexOf(page);
      const direction = delta > 0 ? "up" : "down";
      let timeNow = new Date().getTime();

      if (timeNow - this.lastAnimation < this.quietPeriod) {
        event.preventDefault();
        return;
      }

      if (direction === "up") {
        pageIndex === 0
          ? ""
          : (location.href = `${this.baseUrl}#${this.pages[pageIndex - 1]}`);
      } else if (direction === "down") {
        pageIndex === this.pages.length - 1
          ? ""
          : (location.href = `${this.baseUrl}#${this.pages[pageIndex + 1]}`);
      }
      this.lastAnimation = timeNow;
    },
    highlightPageTitle() {
      const url = location.href;
      const page = url.split("#")[1];
      const pageIndex = this.pages.indexOf(page);

      for (let i = 0; i < this.pages.length; i++) {
        if(pageIndex === i) {
          document
              .querySelector(`.nav a:nth-child(${i + 1})`)
              .classList.add("current-page")
          this.$store.commit("setCurrentPage", this.pages[pageIndex])
        } else {
          document
              .querySelector(`.nav a:nth-child(${i + 1})`)
              .classList.remove("current-page");
        } 
      }
    }
  },
  mounted() {
    this.redirectUrl();
    window.addEventListener("hashchange", () => {
      this.highlightPageTitle();
    });
    this.monitorScroll(document.getElementById("app"));
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");
@import url("https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css");

@media (min-width: 240px) { :root { --txt-size: 0.5rem; } } 
@media (min-width: 320px) { :root { --txt-size: 0.6rem; } } 
@media (min-width: 480px) { :root { --txt-size: 0.7rem; } } 
@media (min-width: 640px) { :root { --txt-size: 0.8rem; } } 
@media (min-width: 768px) { :root { --txt-size: 0.9rem; } } 
@media (min-width: 1024px) { :root { --txt-size: 1rem; } }

.theme-light {
  --bg-color: #ece9e6;
  --primary-txt-color: rgb(12, 12, 12);
  --secondary-txt-color: rgb(28, 37, 34);
}

.theme-dark {
  --bg-color: #232526;
  --primary-txt-color: rgb(243, 236, 236);
  --secondary-txt-color: rgb(230, 215, 215);
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.125s linear;
}
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.125s, opacity 0.125s linear;
}

* {
  font-family: "Libre Baskerville", serif;
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
  color: var(--secondary-txt-color);
  background: var(--bg-color);
  transition: 0.5s;
}

section {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-size: var(--txt-size);
  background-size: cover;
  scroll-snap-align: center;
}
</style>
