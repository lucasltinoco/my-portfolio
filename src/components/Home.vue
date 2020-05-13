<template>
  <div id="home">
    <h1>lucas l. tinoco</h1>
      <div class="avatar">
        <img src="../assets/imgs/avatar.png" alt="Avatar" />
        <p>
          Hi! I'm a (variable adjective).
          <br />I create when it doesn't exist and fix when it doesn't work.
        </p>
      </div>
      <a href="#who-i-am" class="fa fa-chevron-down"></a>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

#home img {
  height: 120px;
  width: 120px;
  border-radius: 50vh;
}

#home p {
  padding-top: 4vh;
  font-style: italic;
  font-size: 1.5rem;
}

</style>