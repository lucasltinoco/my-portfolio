<template>
  <div class="smooth">
    <header>
      <h1>lucas l. tinoco</h1>
      <div class="nav">
          <a href="#home">home</a>
          <a href="#who-i-am">who i am</a>
          <a href="#what-i-do">what i do</a>
          <a href="#my-projects">my projects</a>
          <a href="#contact-me">contact me</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.smooth {
  position: relative;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: hidden;
}

header {
  position: fixed;
  top: 0px;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 59px;
  font-size: 1rem;
  mix-blend-mode: luminosity;
}

header h1 {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0px;
  margin: 0px 0px 0px 25px;
}

header .nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%;
  /* justify-content: flex-end; */
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 25px;
}

header .nav a {
  position: relative;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
}

header .nav a::after {
  position: absolute;
  bottom: -3px;
  left: 0;
  content: "";
  width: 0;
  height: 3px;
  transition: all 0.2s linear;
}

header .nav a:hover::after {
  width: 100%;
  background-color: #000;
}
</style>