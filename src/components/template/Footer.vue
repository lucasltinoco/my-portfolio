<template>
  <footer>
    <a href="https://www.linkedin.com/in/lucas-tinoco-783420194/">Linkedin</a>
    <a href="https://github.com/lucasltinoco/">Github</a>
    <a href="mailto:lucasltinoco@gmail.com">E-mail</a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: transparent;
}

footer a {
  text-decoration: none;
  color: #000;
  padding: 0 5px;
}

footer a:hover {
  text-decoration: none;
  color: #000;
}
</style>