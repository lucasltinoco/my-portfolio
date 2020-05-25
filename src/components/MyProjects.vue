<template>
  <section id="my-projects">
    <div class="tags">
      <button @click="setTag('cpp')">C++</button>
      <button @click="setTag('allegro')">Allegro</button>
      <button @click="setTag('vue')">Vue</button>
      <button @click="setTag('bootstrap')">Bootstrap</button>
      <button @click="setTag('mongodb')">MongoDB</button>
      <button @click="setTag('postgresql')">PostgreSQL</button>
      <button @click="setTag('jquery')">jQuery</button>
      <button @click="setTag('webpack')">WebPack</button>
      <button @click="setTag('react')">React</button>
      <button @click="setTag('jsonserver')">JSON Server</button>
      <button @click="setTag('angular')">Angular</button>
      <button v-if="lang === 'eng'" @click="setTag('all')">All</button>
      <button v-else-if="lang === 'por'" @click="setTag('all')">Todos</button>
    </div>
    <div v-bind:class="{grid: this.tags.all, flex: !this.tags.all}">
      <div class="card proerd" v-show="tags.cpp || tags.allegro || tags.all">
        <div v-if="lang === 'eng'" class="card-category">Run & Jump Game</div>
        <div v-else-if="lang === 'por'" class="card-category">Proerd Game</div>
        <a class="card-link" href="https://github.com/lucasltinoco/proerd-game"></a>
      </div>

      <div
        class="card knowledge"
        v-show="tags.vue || tags.bootstrap || tags.mongodb || tags.postgresql || tags.all"
      >
        <div v-if="lang === 'eng'" class="card-category">Knowledge Base</div>
        <div v-else-if="lang === 'por'" class="card-category">Base de Conhecimento</div>
        <a class="card-link" href="https://github.com/lucasltinoco/knowledge"></a>
      </div>

      <div class="card gallery" v-show="tags.bootstrap || tags.jquery || tags.webpack || tags.all">
        <div v-if="lang === 'eng'" class="card-category">Trip Gallery</div>
        <div v-else-if="lang === 'por'" class="card-category">Galeria de Viagens</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/bootstrap/projeto-galeria"
        ></a>
      </div>

      <div class="card react-calc" v-show="tags.react || tags.all">
        <div v-if="lang === 'eng'" class="card-category">React Calculator</div>
        <div v-else-if="lang === 'por'" class="card-category">Calculadora com React</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/calculadora"
        ></a>
      </div>

      <div class="card react-crud" v-show="tags.react || tags.jsonserver || tags.all">
        <div v-if="lang === 'eng'" class="card-category">React CRUD</div>
        <div v-else-if="lang === 'por'" class="card-category">CRUD com React</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/crud"></a>
      </div>

      <div class="card qr-code" v-show="tags.vue || tags.all">
        <div v-if="lang === 'eng'" class="card-category">QR Code Generator</div>
        <div v-else-if="lang === 'por'" class="card-category">Gerador de QR Code</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/qrcode"></a>
      </div>

      <div class="card vue-calc" v-show="tags.vue || tags.all">
        <div v-if="lang === 'eng'" class="card-category">Vue Calculator</div>
        <div v-else-if="lang === 'por'" class="card-category">Calculadora com Vue</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/calculator"
        ></a>
      </div>

      <div class="card monty-hall" v-show="tags.vue || tags.all">
        <div v-if="lang === 'eng'" class="card-category">Monty Hall Problem</div>
        <div v-else-if="lang === 'por'" class="card-category">Problema de Monty Hall</div>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/montyhall"
        ></a>
      </div>

      <div class="card angular-crud" v-show="tags.angular || tags.jsonserver || tags.all">
        <div v-if="lang === 'eng'" class="card-category">Angular CRUD</div>
        <div v-else-if="lang === 'por'" class="card-category">CRUD com Angular</div>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/angular"></a>
      </div>

      <div class="card portfolio" v-show="tags.vue || tags.bootstrap || tags.all">
        <div v-if="lang === 'eng'" class="card-category">Portfolio</div>
        <div v-else-if="lang === 'por'" class="card-category">Portfólio</div>
        <a class="card-link" href="https://github.com/lucasltinoco/my-portfolio"></a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyProjects",
  computed: mapState(["lang"]),
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
        key == tag ? (value = true) : (value = false);
        this.tags[key] = value;
      }
    }
  }
};
</script>

<style>
.tags {
  position: absolute;
  bottom: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 65vw;
}

.tags button {
  background-color: var(--bg-color);
  border: none;
  color: var(--secondary-txt-color);
  text-align: center;
  text-decoration: none;
  transition: 0.5s;
  outline-color: var(--secondary-txt-color);
  margin: 1px;
  cursor: pointer;
}

.flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow-y: hidden;
  width: 80vw;
  justify-items: center;
  align-items: center;
}

.grid::-webkit-scrollbar {
  height: 12px;
}

.grid::-webkit-scrollbar-track {
  background-color: var(--secondary-txt-color);
  border-radius: 10px;
}

.grid::-webkit-scrollbar-thumb {
  background: var(--bg-color);
  border: 2px solid var(--secondary-txt-color);
  border-radius: 10px;
}

.card {
  position: relative;
  margin: 10px;
  height: 150px;
  width: 150px;
  border-radius: 8px;
  border: 1px solid var(--primary-txt-color);
  transition: 0.5s;
}

.card-category {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
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
  top: 0;
  left: 0;
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