<template>
  <section id="what-i-do">
    <div class="svg-fade">
      <transition name="fade" mode="out-in">
        <img
          v-if="theme === 'theme-dark'"
          src="../assets/imgs/code-guy-dark.svg"
          alt="code guy"
          key="dark"
        />
        <img
          v-else-if="theme === 'theme-light'"
          src="../assets/imgs/code-guy-light.svg"
          alt="code guy"
          key="light"
        />
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <p v-if="lang === 'eng'" key="eng">
        As an electronics lover, I integrate digital and analog circuits choosing the best components depending on the
        situation I'm handling. My arsenal includes the general applications IC's, operational amplifiers, regulators and
        so on. I can also manage programming microcontrollers with the C language, making them communicate with other
        devices. For the past 4 years, I've been studying, working and researching electronics. Among that time I've also
        developed the ability to design printed circuit boards with softwares such as Altium, Proteus and KiCAD.
        <br />Most recently, I've been studying Web Development. My stack includes Node.js, Vue.js, HTML5, CSS3, Bootstrap and
        also some relational and non-relational databases, such as PostgreSQL and MongoDB. Please be free to check my projects on the next page
        and on
        <a
          href="https://github.com/lucasltinoco/"
        >GitHub</a>!
      </p>
      <p v-else-if="lang === 'por'" key="por">
        Como um amante da eletrônica, eu integro circuitos digitais e analógicos escolhendo os melhores componentes dependendo
        da situação que estou lidando. Meu arsenal inclui CI's de aplicação geral, amplificadores operacionais, reguladores e
        por aí vai. Também consigo lidar com a programação de microcontroladores em C, fazendo-os comunicar com outros dispositivos.
        Nos últimos 4 anos, eu estive estudando, trabalhando e pesquisando eletrônica. Dentre este tempo também desenvolvi a
        habilidade de projetar placas de circuito impresso, utilizando softwares como Altium, Proteus e KiCAD.
        <br />Recentemente, tenho estudado sobre Desenvolvimento Web. Minha stack inclui Node.js, Vue.js, HTML5, CSS3, Bootstrap e
        também algumas bases de dados relacionais e não-relacionais, como PostgreSQL e MongoDB. Por favor, confira alguns dos meus projetos na próxima
        página e no
        <a
          href="https://github.com/lucasltinoco/"
        >GitHub</a>!
      </p>
    </transition>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WhatIDo",
  computed: mapState(["lang", "theme"])
};
</script>

<style>
#what-i-do {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
}

#what-i-do p {
  font-size: var(--txt-size);
  width: 80vw;
}

#what-i-do a,
#what-i-do a:hover {
  color: var(--secondary-txt-color);
  transition: 0.5s;
}

#what-i-do img {
  width: calc(var(--txt-size) * 16);
}
</style>