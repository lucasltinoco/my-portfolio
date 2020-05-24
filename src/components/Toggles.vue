<template>
  <div class="toggles">
    <a class="theme-toggler" @click="this.toggleTheme">
      <i class="im im-light-bulb"></i>
    </a>
    <a class="lang-toggler" @click="this.toggleLang">
      {{lang}}
    </a>
  </div>
</template>

<script>
export default {
  name: "Toggles",
  data: function () {
    return {
      lang: ""
    }
  },
  methods: {
    setTheme(themeName) {
      localStorage.setItem("theme", themeName);
      document.querySelector("html").className = themeName;
    },
    toggleTheme() {
      localStorage.getItem("theme") === "theme-dark"
        ? this.setTheme("theme-light")
        : this.setTheme("theme-dark");
    },
    setLang(langName) {
      localStorage.setItem("lang", langName);
      this.lang = langName;
    },
    toggleLang() {
      localStorage.getItem("lang") === "eng"
        ? this.setLang("por")
        : this.setLang("eng");
    }
  },
  mounted() {
    localStorage.getItem("theme") === "theme-dark"
      ? this.setTheme("theme-dark")
      : this.setTheme("theme-light");
    
    localStorage.getItem("lang") === "eng"
      ? this.setLang("eng")
      : this.setLang("por")
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

.lang-toggler {
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  text-decoration: none;
  color: var(--secondary-txt-color);
  font-size: 30px;
  font-weight: bold;
  transition: 0.5s;
}
</style>