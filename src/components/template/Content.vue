<template>
  <div>
    <img src="../../assets/avatar.png" alt="Avatar" />
    <p>Hi! I'm a (variable adjective).<br>
    I create blablablablabla.</p>
    <i class="fa fa-chevron-down"></i>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 120px;
  width: 120px;
  border-radius: 50vh;
}

p {
  font-style: italic;
  font-size: 30px;
}

.fa {
  align-content: flex-end;
}

</style>