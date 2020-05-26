<template>
  <div class="toggles">
    <a class="theme-toggler" @click="this.toggleTheme">
      <i class="im im-light-bulb"></i>
    </a>
    <transition name="fade" mode="out-in">
      <a class="lang-toggler" @click="this.toggleLang" v-bind:key="buttonLang">{{buttonLang}}</a>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Toggles",
  computed: mapState(["lang"]),
  data: function() {
    return {
      buttonLang: ""
    };
  },
  methods: {
    setTheme(themeName) {
      localStorage.setItem("theme", themeName);
      document.querySelector("html").className = themeName;
      this.$store.commit("setTheme", themeName);
    },
    toggleTheme() {
      localStorage.getItem("theme") === "theme-dark"
        ? this.setTheme("theme-light")
        : this.setTheme("theme-dark");
    },
    setLang(langName) {
      localStorage.setItem("lang", langName);
      this.$store.commit("setLang", langName);
      langName === "eng"
        ? this.buttonLang = "por"
        : this.buttonLang = "eng"
    },
    toggleLang() {
      localStorage.getItem("lang") === "eng"
        ? this.setLang("por")
        : this.setLang("eng");
      setTimeout(() => {
        this.$parent.highlightNavItem();
      }, 500)
    }
  },
  mounted() {
    localStorage.getItem("theme") === "theme-dark"
      ? this.setTheme("theme-dark")
      : this.setTheme("theme-light");

    localStorage.getItem("lang") === "eng"
      ? this.setLang("eng")
      : this.setLang("por");
  }
};
</script>

<style>
.theme-toggler {
  position: fixed;
  left: 4vw;
  bottom: 4vh;
  cursor: pointer;
  text-decoration: none;
}

.theme-toggler .im-light-bulb {
  font-size: 30px;
  color: var(--secondary-txt-color);
  transition: 0.5s;
}

.lang-toggler {
  position: fixed;
  right: 4vw;
  bottom: 4vh;
  cursor: pointer;
  text-decoration: none;
  color: var(--secondary-txt-color);
  font-size: 30px;
  font-weight: bold;
  transition: 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>