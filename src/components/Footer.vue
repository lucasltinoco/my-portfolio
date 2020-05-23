<template>
  <footer class="toggles">
    <a class="theme-toggler" @click="this.toggleTheme">
      <i class="im im-light-bulb"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    setTheme(themeName) {
      localStorage.setItem("theme", themeName);
      document.querySelector("html").className = themeName;
    },
    toggleTheme() {
      if (localStorage.getItem("theme") === "theme-dark") {
        this.setTheme("theme-light");
      } else {
        this.setTheme("theme-dark");
      }
    }
  },
  mounted() {
    localStorage.getItem("theme") === "theme-dark"
      ? this.setTheme("theme-dark")
      : this.setTheme("theme-light");
  }
};
</script>

<style>
.toggles {
  color: var(--secondary-txt-color);
  transition: 0.5s;
}
.theme-toggler {
  position: fixed;
  left: 50px;
  bottom: 50px;
  cursor: pointer;
  text-decoration: none;
}

.theme-toggler .im-light-bulb {
  font-size: 30px;
}
</style>