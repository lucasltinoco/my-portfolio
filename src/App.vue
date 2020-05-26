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
import Header from "./components/Header";
import Home from "./components/Home";
import WhoIAm from "./components/WhoIAm";
import WhatIDo from "./components/WhatIDo";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Toggles from "./components/Toggles";

export default {
  name: "App",
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
      this.highlightNavItem();
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
    highlightNavItem() {
      const url = location.href;
      const page = url.split("#")[1];
      const pageIndex = this.pages.indexOf(page);

      for (let i = 0; i < this.pages.length; i++) {
        pageIndex === i
          ? document
              .querySelector(`header div a:nth-child(${i + 1})`)
              .classList.add("current-page")
          : document
              .querySelector(`header div a:nth-child(${i + 1})`)
              .classList.remove("current-page");
      }
    }
  },
  mounted() {
    this.redirectUrl();
    window.addEventListener("hashchange", () => {
      this.highlightNavItem();
    });
    this.monitorScroll(document.getElementById("app"));
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");
@import url("https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css");

:root {
  --txt-size: 16px;
}

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
