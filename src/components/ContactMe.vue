<template>
  <div id="contact-me">
    <h1>contact me!</h1>
      <p>Contact Me Content</p>
      <a href="https://www.linkedin.com/in/lucas-tinoco-783420194/">Linkedin</a>
      <a href="https://github.com/lucasltinoco">GitHub</a>
      <a href="mailto:lucasltinoco@gmail.com">E-mail</a>
      <a href="#home" class="fa fa-chevron-up"></a>
  </div>
</template>

<script>
export default {
  name: "MyProjects"
}
</script>

<style>
#contact-me {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}
#contact-me p {
  font-size: 1.5rem;
}

.fa-chevron-up,
.fa-chevron-up:hover {
  margin-bottom: 10vh;
  text-decoration: none;
  color: #000;
}
</style>