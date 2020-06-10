<template>
  <section id="home">
    <img src="../assets/imgs/avatar.png" alt="Avatar" />
    <transition name="fade" mode="out-in">
      <p v-if="lang === 'eng'" key="eng">
        Hi! My name is Lucas Tinoco and I'm a
        <strong class="adjective">{{adjectivesEng[counter]}}</strong>.
        <br />I create when it doesn't exist and fix when it doesn't work.
      </p>
      <p v-else-if="lang === 'por'" key="por">
        Olá! Meu nome é Lucas Tinoco e eu sou um
        <strong class="adjective">{{adjectivesPor[counter]}}</strong>.
        <br />Eu crio quando não existe e conserto quando não funciona.
      </p>
    </transition>
    <div class="social">
      <a href="https://www.linkedin.com/in/lucas-tinoco-783420194/" target="_blank">
        <i class="im im-linkedin"></i>
      </a>
      <a href="https://github.com/lucasltinoco" target="_blank">
        <i class="im im-github"></i>
      </a>
      <a href="mailto:lucasltinoco@gmail.com" target="_blank">
        <i class="im im-newsletter"></i>
      </a>
      <a href="https://www.instagram.com/lucasltinoco/" target="_blank">
        <i class="im im-instagram"></i>
      </a>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: mapState(["lang"]),
  data: function() {
    return {
      adjectivesEng: ["maker", "reader", "dev", "baller"],
      adjectivesPor: ["maker", "leitor", "dev", "boleiro"],
      counter: 0
    };
  },
  methods: {
    updateAdjective() {
      setInterval(() => {
        this.counter > 2 ? (this.counter = 0) : this.counter++;
      }, 1500);
    }
  },
  mounted() {
    this.updateAdjective();
  }
};
</script>

<style>
#home img {
  height: calc(var(--txt-size) * 8);
  width: calc(var(--txt-size) * 8);
  border-radius: 50vh;
}

#home p {
  padding-top: 2vh;
  font-style: italic;
  font-size: calc(var(--txt-size) * 3 / 2);
  width: 80vw;
  max-width: 1000px;
  text-align: center;
}

.adjective {
  color: var(--primary-txt-color);
  transition: 0.5s;
}
.social {
  display: flex;
  flex-direction: row;
}

.social i {
  color: var(--secondary-txt-color);
  transition: 0.5s;
  font-size: var(--txt-size);
  text-decoration: none;
  padding: 0 5px;
  justify-content: center;
  align-items: flex-end;
}
</style>