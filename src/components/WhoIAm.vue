<template>
  <section id="who-i-am">
      <p v-if="lang === 'eng'">I'm an electronics technician graduated in 2019 at the Federal Institute of Santa Catarina (<a href="https://www.ifsc.edu.br/international">IFSC</a>), 
        who now strives to get an undergraduate degree in Electronical Engineering at the Federal University of Santa Catarina
        (<a href="https://en.ufsc.br/">UFSC</a>). Currently, I live in Florianópolis, Brazil, where, in addition to studying engineering, I study 
        programming on my own. When I'm not designing new circuits, studying or coding, I like to play some basketball or 
        soccer, to read and to sing -- sometimes mixing things up too...</p>
      
      <p v-else-if="lang === 'por'">Eu sou um técnico em eletrônica formado em 2019 no Instituto Federal de Santa Catarina (<a href="https://www.ifsc.edu.br/international">IFSC</a>), 
        que hoje ambiciona se formar em Engenharia Eletrônica na Universidade Federal de Santa Catarina (<a href="https://en.ufsc.br/">UFSC</a>). 
        Atualmente, moro em Florianópolis, Brasil, onde, além de estudar engenharia, estudo programação por conta própria. Quando 
        não estou projetando novos circuitos, estudando ou programando, eu gosto de jogar basquete ou futebol, de ler e de cantar
         -- às vezes misturando as coisas também...</p>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "WhoIAm",
  computed: mapState(["lang"])
}
</script>

<style>
#who-i-am p {
  font-size: 1.5rem;
  width: 75vw;
}

#who-i-am a,
#who-i-am a:hover {
  text-decoration: none;
  color: var(--secondary-txt-color);
  transition: 0.5s;
}
</style>