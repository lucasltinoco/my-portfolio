<template>
  <section id="who-i-am">
    <div class="svg-fade">
      <transition name="fade" mode="out-in">
        <img
          v-if="theme === 'theme-dark'"
          src="../assets/imgs/circuit-guy-dark.svg"
          alt="circuits guy"
          key="dark"
        />
        <img
          v-else-if="theme === 'theme-light'"
          src="../assets/imgs/circuit-guy-light.svg"
          alt="circuits guy"
          key="light"
        />
      </transition>
    </div>

    <transition name="fade" mode="out-in">
      <p v-if="lang === 'eng'" key="eng">
        I'm an electronics technician graduated in 2019 at the
        <a
          href="https://www.ifsc.edu.br/international"
        >Federal Institute of Santa Catarina (IFSC)</a>,
        who now strives to get an undergraduate degree in Electronical Engineering at the
        <a
          href="https://en.ufsc.br/"
        >Federal University of Santa Catarina (UFSC)</a>. Currently, I live in Florianópolis (Brazil), where, in addition to studying engineering, I study
        programming on my own. When I'm not designing new circuits, studying or coding, I like to play some basketball or
        soccer, to read and to sing - sometimes mixing things up too...
      </p>

      <p v-else-if="lang === 'por'" key="por">
        Eu sou um técnico em eletrônica formado em 2019 no
        <a
          href="https://www.ifsc.edu.br/"
        >Instituto Federal de Santa Catarina (IFSC)</a>,
        que hoje ambiciona se formar em Engenharia Eletrônica na
        <a
          href="https://ufsc.br/"
        >Universidade Federal de Santa Catarina (UFSC)</a>.
        Atualmente, moro em Florianópolis (SC), onde, além de estudar engenharia, estudo programação por conta própria. Quando
        não estou projetando novos circuitos, estudando ou programando, eu gosto de jogar basquete ou futebol, de ler e de cantar
        - às vezes misturando as coisas também...
      </p>
    </transition>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WhoIAm",
  computed: mapState(["lang", "theme"])
};
</script>

<style>
#who-i-am {
  display: flex;
  justify-content: center;
  align-items: center;
}

#who-i-am img {
  width: calc(var(--txt-size) * 16);
}

.svg-fade .fade-enter-active,
.svg-fade .fade-leave-active {
  transition: opacity 0.125s;
}
.svg-fade .fade-enter,
.svg-fade .fade-leave-to {
  opacity: 0;
}

#who-i-am p {
  margin: 0px;
  font-size: var(--txt-size);
  width: 80vw;
}

#who-i-am a,
#who-i-am a:hover {
  color: var(--secondary-txt-color);
  transition: 0.5s;
}
</style>