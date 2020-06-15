<template>
  <div :class="{ loader: true, fadeout: !pageIsLoading }">
    <img
            v-if="theme === 'theme-dark'"
            src="../assets/imgs/logo-dark.svg"
            alt="logo"
            key="dark"/>
          <img
            v-else-if="theme === 'theme-light'"
            src="../assets/imgs/logo-light.svg"
            alt="logo"
            key="light"
        />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SplashScreen",
  computed: mapState(["theme"]),
  props: ["pageIsLoading"]
};
</script>

<style>
.loader {
  background-color: var(--bg-color);
  color: var(--primary-txt-color);
  text-align: center;
  padding-top: calc((var(--vh, 1vh) * 50) - (var(--txt-size) * 10) / 2);
  display: block;
  position: fixed;
  overflow: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.loader img {
  height: calc(var(--txt-size) * 10);
  width: auto;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>