<template>
  <section id="what-i-do">
      <p>As an electronic technician, I integrate digital and analog circuits choosing the best components depending on the 
          situation I'm handling. My arsenal includes the general applications IC's, operational amplifiers, regulators and 
          so on. I can also manage programming microcontrollers with the C language, making them communicate with other 
          devices. For the past 4 years, I've been studying, working and researching electronics. Among that time I've also 
          developed the ability to design printed circuit boards with softwares such as Altium, Proteus and KiCAD.
          <br>
          Most recently, I've been studying Web Development. My stack includes Node.js, Vue.js, HTML5, CSS3, Bootstrap and 
          also some relational and non-relational databases, such as PostgresSQL and MongoDB. Please be free to check me out 
          on <a href="https://github.com/lucasltinoco/">GitHub</a>!</p>
  </section>
</template>

<script>
export default {
  name: "WhatIDo"
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