<template>
  <section id="home">
    <img src="../assets/imgs/avatar.png" alt="Avatar" />
    <p>
      Hi! I'm a
      <strong class="adjective">{{adjectives[counter]}}</strong>.
      <br />I create when it doesn't exist and fix when it doesn't work.
    </p>
    <div class="social">
      <a href="https://www.linkedin.com/in/lucas-tinoco-783420194/">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/lucasltinoco">
        <i class="fa fa-github"></i>
      </a>
      <a href="mailto:lucasltinoco@gmail.com">
        <i class="fa fa-envelope"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      adjectives: ["maker", "reader", "dev", "baller"],
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
  height: 120px;
  width: 120px;
  border-radius: 50vh;
}

#home p {
  padding-top: 4vh;
  font-style: italic;
  font-size: 1.75rem;
}

.adjective {
  color: green;
}

.social {
  display: flex;
  flex-direction: row;
  font-size: 1em;
}

.social i {
  color: black;
  text-decoration: none;
  padding: 0 5px;
}
</style>