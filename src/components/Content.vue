<template>
  <body>
    <img src="../assets/avatar.png" alt="Avatar" />
    <p>Hi! I'm a (variable adjective) <br>
    I create blablablablabla</p>
  </body>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  height: 120px;
  width: 120px;
  border-radius: 50vh;
}

p {
  padding-top: 25px;
}

</style>