<template>
  <div id="who-i-am">
    <h1>who i am</h1>
      <p>I'm an electronics technician graduated in 2019 at the Federal Institute of Santa Catarina (IFSC) (put link), 
        who now strives to get an undergraduate degree in Electronical Engineering at the Federal University of Santa Catarina
        (UFSC) (put link). Currently, I live in Florianópolis, Brazil, where, in addition to studying engineering, I study 
        programming on my own. When I'm not designing new circuits, studying or coding, I like to play some basketball or 
        soccer, to read and to sing -- sometimes mixing things up too...</p>
      <a href="#what-i-do" class="fa fa-chevron-down"></a>
  </div>
</template>

<script>
export default {
  name: "WhoIAm"
}
</script>

<style>
#who-i-am {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

#who-i-am p {
  font-size: 1.5rem;
  text-align: center;
}
</style>