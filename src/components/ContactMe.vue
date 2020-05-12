<template>
  <div class="contact-me">
    <header>contact me!</header>
    <div class="contact-me-content">
      <p>Contact Me Content</p>
      <a href="https://www.linkedin.com/in/lucas-tinoco-783420194/">Linkedin</a>
      <a href="https://github.com/lucasltinoco">GitHub</a>
      <a href="mailto:lucasltinoco@gmail.com">E-mail</a>
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
</style>