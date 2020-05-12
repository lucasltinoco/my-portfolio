<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from "@/components/Content";

export default {
  name: "App",
  components: {
    Content
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200&display=swap');

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
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* margin: 0px; */
  height: 100vh;
}
</style>
