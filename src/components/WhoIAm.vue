<template>
  <section id="who-i-am">
      <p>I'm an electronics technician graduated in 2019 at the Federal Institute of Santa Catarina (<a href="https://www.ifsc.edu.br/international">IFSC</a>), 
        who now strives to get an undergraduate degree in Electronical Engineering at the Federal University of Santa Catarina
        (<a href="https://en.ufsc.br/">UFSC</a>). Currently, I live in Florianópolis, Brazil, where, in addition to studying engineering, I study 
        programming on my own. When I'm not designing new circuits, studying or coding, I like to play some basketball or 
        soccer, to read and to sing -- sometimes mixing things up too...</p>
  </section>
</template>

<script>
export default {
  name: "WhoIAm"
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
}
</style>