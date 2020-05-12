<template>
  <div id="contact-me">
    <header>contact me!</header>
    <div class="contact-me-content">
      <p>Contact Me Content</p>
      <a href="https://www.linkedin.com/in/lucas-tinoco-783420194/">Linkedin</a>
      <a href="https://github.com/lucasltinoco">GitHub</a>
      <a href="mailto:lucasltinoco@gmail.com">E-mail</a>
      <a href="#home" class="fa fa-chevron-up"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects"
};
</script>

<style>
.contact-me-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.fa-chevron-up,
.fa-chevron-up:hover {
  padding-top: 10vh;
  text-decoration: none;
  color: #000;
}
</style>