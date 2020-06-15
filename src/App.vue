<template>
  <div id="app">
    <SplashScreen :pageIsLoading="pageIsLoading" />
    <div v-show="!pageIsLoading">
      <Header />
      <Home />
      <WhoIAm />
      <WhatIDo />
      <MyProjects />
      <ContactMe />
      <Toggles />
    </div>
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
import SplashScreen from "./components/SplashScreen";

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
    Toggles,
    SplashScreen,
  },
  data: function() {
    return {
      baseUrl: "http://192.168.0.24:8080/",
      pages: ["home", "who-i-am", "what-i-do", "my-projects", "contact-me"],
      lastAnimation: 0,
      quietPeriod: 500,
      startX: 0,
      startY: 0,
      pageIsLoading: true,
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
      setTimeout(() => this.highlightPageTitle(), 250);
    },
    findScrollDirection(event) {
      if (event.shiftKey) return;
      let delta;
      event.preventDefault();
      event.wheelDelta
        ? (delta = event.wheelDelta)
        : (delta = -1 * event.deltaY);
      const direction = delta > 0 ? "up" : "down";
      this.movePage(direction);
    },
    touchStart(event) {
      let touches = event.touches;
      if (touches && touches.length) {
        this.startX = touches[0].pageX;
        this.startY = touches[0].pageY;
        document.addEventListener("touchmove", this.touchMove);
      }
    },
    touchMove(event) {
      let touches = event.touches;
      if (touches && touches.length) {
        event.preventDefault();
        let deltaX = this.startX - touches[0].pageX;
        let deltaY = this.startY - touches[0].pageY;

        if (deltaY >= 50) this.movePage("down");

        if (deltaY <= -50) this.movePage("up");

        if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50)
          document.removeEventListener("touchmove", this.touchMove);
      }
    },
    movePage(direction) {
      const url = location.href;
      const page = url.split("#")[1];
      const pageIndex = this.pages.indexOf(page);
      let timeNow = new Date().getTime();

      if (timeNow - this.lastAnimation < this.quietPeriod) return;

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
        if (pageIndex === i) {
          document
            .querySelector(`.nav a:nth-child(${i + 1})`)
            .classList.add("current-page");
          this.$store.commit("setCurrentPage", this.pages[pageIndex]);
        } else {
          document
            .querySelector(`.nav a:nth-child(${i + 1})`)
            .classList.remove("current-page");
        }
      }

      page === "my-projects"
        ? this.playVideos()
        : this.pauseVideos();
    },
    setVh() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
    handleKeys(event) {
      switch (event.key) {
        case "ArrowUp":
        case "PageUp":
          this.movePage("up");
          break;
        case "ArrowDown":
        case "PageDown":
          this.movePage("down");
          break;
        case "Home":
          location.href = `${this.baseUrl}#home`;
          break;
        case "End":
          location.href = `${this.baseUrl}#contact-me`;
          break;
        default:
          break;
      }
    },
    onProjectsLoaded() {
      setTimeout(() => {
        this.pageIsLoading = false
        this.redirectUrl();
      }, 250);
    },
    playVideos() {
      const videos = document.querySelectorAll(
        "#my-projects > div.grid > div > video"
      );
      videos.forEach(video => video.play());
    },
    pauseVideos() {
      const videos = document.querySelectorAll(
        "#my-projects > div.grid > div > video"
      );
      videos.forEach(video => video.pause());
    }
  },
  mounted() {
    this.setVh();

    document
      .getElementById("app")
      .addEventListener("wheel", this.findScrollDirection);

    document
      .getElementById("app")
      .addEventListener("touchstart", this.touchStart);

    document.addEventListener("keydown", this.handleKeys);

    window.addEventListener("resize", () => {
      this.setVh();
      this.redirectUrl();
    });

    window.addEventListener("hashchange", () => this.highlightPageTitle());
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");
@import url("https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css");

@media (min-width: 240px) {
  :root {
    --txt-size: 0.5rem;
  }
}
@media (min-width: 320px) {
  :root {
    --txt-size: 0.6rem;
  }
}
@media (min-width: 480px) {
  :root {
    --txt-size: 0.7rem;
  }
}
@media (min-width: 640px) {
  :root {
    --txt-size: 0.8rem;
  }
}
@media (min-width: 768px) {
  :root {
    --txt-size: 0.9rem;
  }
}
@media (min-width: 1024px) {
  :root {
    --txt-size: 1rem;
  }
}
@media (min-width: 1440px) {
  :root {
    --txt-size: 1.1rem;
  }
}
@media (min-width: 2560px) {
  :root {
    --txt-size: 1.2rem;
  }
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
  text-align: justify;
  position: relative;
  margin: 0;
  overflow: hidden;
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
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
  height: calc(var(--vh, 1vh) * 100);
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-size: var(--txt-size);
  background-size: cover;
  scroll-snap-align: center;
}
</style>
