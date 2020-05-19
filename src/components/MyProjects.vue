<template>
  <div id="my-projects">
    <h1>my projects</h1>
    <div class="tags">tags</div>
    <div class="projects">

      <div class="card proerd">
        <div class="card-category">Run & Jump Game</div>
        <a class="card-link" href="https://github.com/lucasltinoco/proerd-game"></a>
      </div>

      <div class="card knowledge">
        <div class="card-category">Knowledge Base</div>
        <a class="card-link" href="https://github.com/lucasltinoco/knowledge"></a>
      </div>

      <div class="card gallery">
        <div class="card-category">Gallery</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/bootstrap/projeto-galeria"></a>
      </div>

      <div class="card react-calc">
        <div class="card-category">React Calculator</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/calculadora"></a>
      </div>

      <div class="card react-crud">
        <div class="card-category">React CRUD</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/crud"></a>
      </div>

      <div class="card qr-code">
        <div class="card-category">QR Code Gen</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/qrcode"></a>
      </div>

      <div class="card vue-calc">
        <div class="card-category">Vue Calculator</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/calculator"></a>
      </div>

      <div class="card monty-hall">
        <div class="card-category">Monty Hall</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/montyhall"></a>
      </div>

      <div class="card angular-crud">
        <div class="card-category">Angular Crud</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/angular"></a>
      </div>

      <div class="card portfolio">
        <div class="card-category">Portfolio</div>
        <a class="card-link" href="https://github.com/lucasltinoco/my-portfolio"></a>
      </div>

    </div>
    <a href="#contact-me" class="fa fa-chevron-down"></a>
  </div>
</template>

<script>
export default {
  name: "MyProjects"
};
</script>

<style>
#my-projects {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75vw;
}

.tags {
  margin-top: 5vh;
}

.card {
  margin: 10px;
  height: 150px;
  width: 150px;
  border-radius: 8px;
}

.card-category {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  color: #fff;
}

.card-link,
.card-link:hover {
  position: absolute;
  margin: 0px;
  height: 150px;
  width: 150px;
  z-index: 2;
  background: black;
  border-radius: 8px;
}

.card-link {
  opacity: 0;
}

.card-link:hover {
  opacity: 0.1;
}

.proerd {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/proerd.gif");
}

.gallery {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/gallery.gif");
}

.knowledge {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/knowledge.gif");
}

.react-calc {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/react-calc.gif");
}

.react-crud {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/react-crud.gif");
}

.qr-code {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/qr-code.gif");
}

.vue-calc {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/vue-calc.gif");
}

.monty-hall {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/monty-hall.gif");
}

.angular-crud {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/angular-crud.gif");
}

.portfolio {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("../assets/imgs/projects/proerd.gif"); /* TEMPORARY */
}

</style>