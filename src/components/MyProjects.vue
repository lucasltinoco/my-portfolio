<template>
  <div id="my-projects">
    <h1>my projects</h1>
    <div class="tags">
      <b-button-group size="sm">
        <b-button @click="setTag('cpp')">C++</b-button>
        <b-button @click="setTag('allegro')">Allegro</b-button>
        <b-button @click="setTag('vue')">Vue</b-button>
        <b-button @click="setTag('bootstrap')">Bootstrap</b-button>
        <b-button @click="setTag('mongodb')">MongoDB</b-button>
        <b-button @click="setTag('postgresql')">PostgreSQL</b-button>
        <b-button @click="setTag('jquery')">jQuery</b-button>
        <b-button @click="setTag('webpack')">WebPack</b-button>
        <b-button @click="setTag('react')">React</b-button>
        <b-button @click="setTag('jsonserver')">JSON Server</b-button>
        <b-button @click="setTag('angular')">Angular</b-button>
        <b-button @click="setTag('all')">All</b-button>
      </b-button-group>
    </div>
    <div class="projects">
      <div class="card proerd" v-show="tags.cpp || tags.allegro || tags.all">
        <div class="card-category">Run & Jump Game</div>
        <a class="card-link" href="https://github.com/lucasltinoco/proerd-game"></a>
      </div>

      <div class="card knowledge" v-show="tags.vue || tags.bootstrap || tags.mongodb || tags.postgresql || tags.all">
        <div class="card-category">Knowledge Base</div>
        <a class="card-link" href="https://github.com/lucasltinoco/knowledge"></a>
      </div>

      <div class="card gallery" v-show="tags.bootstrap || tags.jquery || tags.webpack || tags.all">
        <div class="card-category">Trip Gallery</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/bootstrap/projeto-galeria"
        ></a>
      </div>

      <div class="card react-calc" v-show="tags.react || tags.all">
        <div class="card-category">React Calculator</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/calculadora"
        ></a>
      </div>

      <div class="card react-crud" v-show="tags.react || tags.jsonserver || tags.all">
        <div class="card-category">React CRUD</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/crud"></a>
      </div>

      <div class="card qr-code" v-show="tags.vue || tags.all">
        <div class="card-category">QR Code Generator</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/qrcode"></a>
      </div>

      <div class="card vue-calc" v-show="tags.vue || tags.all">
        <div class="card-category">Vue Calculator</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/calculator"
        ></a>
      </div>

      <div class="card monty-hall" v-show="tags.vue || tags.all">
        <div class="card-category">Monty Hall Problem</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/montyhall"
        ></a>
      </div>

      <div class="card angular-crud" v-show="tags.angular || tags.jsonserver || tags.all">
        <div class="card-category">Angular Crud</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/angular"></a>
      </div>

      <div class="card portfolio" v-show="tags.vue || tags.bootstrap || tags.all">
        <div class="card-category">Portfolio</div>
        <a class="card-link" href="https://github.com/lucasltinoco/my-portfolio"></a>
      </div>
    </div>

    <a href="#contact-me" class="fa fa-chevron-down"></a>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  data: function() {
    return {
      tags: {
        cpp: false,
        allegro: false,
        vue: false,
        bootstrap: false,
        mongodb: false,
        postgresql: false,
        jquery: false,
        webpack: false,
        react: false,
        jsonserver: false,
        angular: false,
        all: true
      }
    };
  },
  methods: {
    setTag(tag) {
      for (let [key, value] of Object.entries(this.tags)) {
        key == tag ? value = true : value = false 
        this.tags[key] = value
      }
    }
  }
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
  text-align: left;
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