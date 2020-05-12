<template>
  <div id="home">
    <header>lucas l. tinoco</header>
    <div class="home-content">
      <img src="../assets/avatar.png" alt="Avatar" />
      <p>
        Hi! I'm a (variable adjective).
        <br />I create blablablablabla.
      </p>
      <a href="#about-me" class="fa fa-chevron-down"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.home-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.home-content img {
  height: 120px;
  width: 120px;
  border-radius: 50vh;
}

.home-content p {
  padding-top: 25px;
  font-style: italic;
  font-size: 1.5em;
}
</style>