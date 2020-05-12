<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap"
      rel="stylesheet"
    />
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

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
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  );
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
  display: grid;
  grid-template-rows: 12vh 1fr 5vh;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
}
</style>
