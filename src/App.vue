<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
  display: grid;
  grid-template-rows: 10vh 1fr 5vh;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
}
</style>
