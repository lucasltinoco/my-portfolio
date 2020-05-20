<template>
  <div class="smooth">
    <div class="header">
      <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#who-i-am">who i am</a></li>
        <li><a href="#what-i-do">what i do</a></li>
        <li><a href="#my-projects">my projects</a></li>
        <li><a href="#contact-me">contact me</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
.smooth {
  position: relative;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: hidden;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
}

.header {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 59px;
  font-size: 1rem;
  mix-blend-mode: luminosity;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
}

.header ul li a {
  position: relative;
  text-decoration: none;
  font-weight: 590;
  margin-right: 25px;
}

.header ul li a::after {
  position: absolute;
  bottom: -3px;
  left: 0;
  content: '';
  width: 0;
  height: 3px;
  transition: all 0.2s linear;
}

.header ul li a:hover::after {
  width: 100%;
  background-color: #000;
}
</style>