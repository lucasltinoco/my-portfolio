<template>
  <section id="what-i-do">
      <p v-if="lang === 'eng'">As an electronic technician, I integrate digital and analog circuits choosing the best components depending on the 
          situation I'm handling. My arsenal includes the general applications IC's, operational amplifiers, regulators and 
          so on. I can also manage programming microcontrollers with the C language, making them communicate with other 
          devices. For the past 4 years, I've been studying, working and researching electronics. Among that time I've also 
          developed the ability to design printed circuit boards with softwares such as Altium, Proteus and KiCAD.
          <br>
          Most recently, I've been studying Web Development. My stack includes Node.js, Vue.js, HTML5, CSS3, Bootstrap and 
          also some relational and non-relational databases, such as PostgresSQL and MongoDB. Please be free to check me out 
          on <a href="https://github.com/lucasltinoco/">GitHub</a>!</p>
      <p v-else-if="lang === 'por'">Como um técnico em eletrônica, eu integro circuitos digitais e analógicos escolhendo os melhores componentes dependendo 
          da situação que estou lidando. Meu arsenal inclui CI's de aplicação geral, amplificadores operacionais, reguladores e 
          por aí vai. Também consigo lidar com a programação de microcontroladores em C, fazendo-os comunicar com outros dispositivos. 
          Nos últimos 4 anos, eu estive estudando, trabalhando e pesquisando eletrônica. Dentre este tempo também desenvolvi a 
          habilidade de projetar placas de circuito impresso, utilizando softwares como Altium, Proteus e KiCAD.
          <br>
          Recentemente, tenho estudado sobre Desenvolvimento Web. Minha stack inclui Node.js, Vue.js, HTML5, CSS3, Bootstrap e 
          também algumas bases de dados relacionais e não-relacionais, como PostgreSQL e MongoDB. Por favor, confira meu 
          <a href="https://github.com/lucasltinoco/">GitHub</a>!</p>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "WhatIDo",
  computed: mapState(["lang"])
}
</script>

<style>
#what-i-do p {
  font-size: 1.5rem;
  width: 75vw;
}

#what-i-do a,
#what-i-do a:hover {
  text-decoration: none;
  color: var(--secondary-txt-color);
  transition: 0.5s;
}
</style>