<template>
  <div id="app">
    <Home />
    <WhoIAm />
    <WhatIDo />
    <MyProjects />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home";
import WhoIAm from "./components/WhoIAm";
import WhatIDo from "./components/WhatIDo";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Home,
    WhoIAm,
    WhatIDo,
    MyProjects,
    ContactMe,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@200&display=swap");

* {
  font-family: "Jost", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0px;
  color: #000;
  background: linear-gradient(to left, #ece9e6, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

h1 {
  position: sticky;
  top: 5vh;
  font-size: 2.5rem;
  font-weight: 900;
}

.fa-chevron-down,
.fa-chevron-down:hover {
  padding-bottom: 10vh;
  text-decoration: none;
  color: #000;
}
</style>
