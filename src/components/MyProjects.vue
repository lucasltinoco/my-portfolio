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
      <button @click="setTag('reactnative')">React Native</button>
      <button @click="setTag('typescript')">TypeScript</button>
      <button @click="setTag('sqlite')">SQLite</button>
      <button @click="setTag('nunjucks')">Nunjucks</button>
      <transition name="fade" mode="out-in">
        <!-- ADJUST TRANSITION -->
        <button v-if="lang === 'eng'" @click="setTag('all')" key="eng">
          All
        </button>
        <button v-else-if="lang === 'por'" @click="setTag('all')" key="por">
          Todos
        </button>
      </transition>
    </div>

    <div class="grid">
      <div class="card" v-show="
          tags.cpp || 
          tags.allegro || 
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/proerd.mp4" type="video/mp4" />
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            Run & Jump Game
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Proerd Game
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/proerd-game" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.vue ||
          tags.bootstrap ||
          tags.mongodb ||
          tags.postgresql ||
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/knowledge.mp4" type="video/mp4" />
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            Knowledge Base
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Base de Conhecimento
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/knowledge" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.bootstrap || 
          tags.jquery || 
          tags.webpack || 
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/gallery.mp4" type="video/mp4" />
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            Trip Gallery
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Galeria de Viagens
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/bootstrap/projeto-galeria" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.react || 
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/react-calc.mp4" type="video/mp4"/>
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            React Calculator
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Calculadora com React
          </div>
        </transition>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/calculadora"
          target="_blank"
        ></a>
      </div>

      <div class="card" v-show="
          tags.react || 
          tags.jsonserver || 
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/react-crud.mp4" type="video/mp4"/>
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            React CRUD
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            CRUD com React
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/react/crud" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.vue ||
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/qr-code.mp4" type="video/mp4" />
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            QR Code Generator
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Gerador de QR Code
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/qrcode" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.vue ||
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/vue-calc.mp4" type="video/mp4" />
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            Vue Calculator
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Calculadora com Vue
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/calculator" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.vue || 
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/monty-hall.mp4" type="video/mp4"/>
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            Monty Hall Problem
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Problema de Monty Hall
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/cursoWeb/tree/master/vue/montyhall" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.angular ||
          tags.jsonserver || 
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source
            src="../assets/imgs/projects/angular-crud.mp4"
            type="video/mp4"
          />
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            Angular CRUD
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            CRUD com Angular
          </div>
        </transition>
        <a
          class="card-link"
          href="https://github.com/lucasltinoco/cursoWeb/tree/master/angular"
          target="_blank"
        ></a>
      </div>

      <div class="card" v-show="
          tags.vue || 
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/portfolio.mp4" type="video/mp4"/>
        </video>
        <transition name="fade" mode="out-in">
          <div v-if="lang === 'eng'" class="card-category" key="eng">
            Portfolio
          </div>
          <div v-else-if="lang === 'por'" class="card-category" key="por">
            Portfólio
          </div>
        </transition>
        <a class="card-link" href="https://github.com/lucasltinoco/my-portfolio" target="_blank"></a>
      </div>

      <div
        class="card"
        v-show="
          tags.react ||
          tags.reactnative ||
          tags.sqlite ||
          tags.typescript ||
          tags.all
        "
      >
        <video loop width="150" height="150">
          <source src="../assets/imgs/projects/ecoleta-booster.mp4" type="video/mp4"/>
        </video>
        <div class="card-category">Ecoleta Booster</div>
        <a class="card-link" href="https://github.com/lucasltinoco/ecoleta-booster" target="_blank"></a>
      </div>

      <div class="card" v-show="
          tags.nunjucks || 
          tags.sqlite || 
          tags.all
        "
      >
        <video loop width="150px" height="150px">
          <source src="../assets/imgs/projects/ecoleta-starter.mp4" type="video/mp4"/>
        </video>
        <div class="card-category">Ecoleta Starter</div>
        <a class="card-link" href="https://github.com/lucasltinoco/ecoleta-starter" target="_blank"></a>
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
        reactnative: false,
        sqlite: false,
        nunjucks: false,
        typescript: false,
        all: true,
      },
    };
  },
  methods: {
    setTag(tag) {
      this.transitionGrid(document.querySelector(".grid"));
      for (let [key, value] of Object.entries(this.tags)) {
        key == tag ? (value = true) : (value = false);
        this.tags[key] = value;
      }
      setTimeout(() => {
        this.configureGrid(document.querySelector(".grid"));
      }, 1);
    },
    getChildren(gridElement) {
      let activeChildren = 0;
      for (let i = 1; i <= gridElement.children.length; i++) {
        if (
          !(
            document.querySelector(`.grid div:nth-child(${i})`).style.display === "none"
          )
        ) {
          activeChildren++;
        }
      }
      return activeChildren;
    },
    configureGrid(gridElement) {
      const cards = this.getChildren(gridElement);
      const columns = Math.ceil(cards / 2);
      gridElement.style = `
        grid-template-columns: repeat(${columns}, 1fr); 
        width: ${columns * 152 + (columns - 1) * 20}px;
      `;
    },
    transitionGrid(gridElement) {
      gridElement.classList.remove("visible-grid");
      gridElement.classList.add("hidden-grid");
      setTimeout(() => {
        gridElement.classList.remove("hidden-grid");
        gridElement.classList.add("visible-grid");
      }, 250);
    },
  },
  mounted() {
    this.$parent.onProjectsLoaded();
  }
};
</script>

<style>
.tags {
  position: absolute;
  bottom: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 75vw;
}

.tags button {
  background-color: var(--bg-color);
  color: var(--secondary-txt-color);
  outline-color: var(--secondary-txt-color);
  transition: 0.5s;
  border: none;
  text-align: center;
  text-decoration: none;
  margin: 1px;
  cursor: pointer;
  font-size: var(--txt-size);
}

.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow-y: auto;
  justify-items: center;
  align-items: center;
  gap: 10px 20px;
  width: 1012px;
  max-width: 80vw;
}

.visible-grid {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s linear;
}
.hidden-grid {
  visibility: hidden;
  opacity: 0;
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
  margin-bottom: 10px;
  height: 150px;
  width: 150px;
  border-radius: 8px;
}

video {
  border-radius: 8px;
  border: 1px solid var(--primary-txt-color);
  transition: 0.5s;
}

.card-category {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  font-size: 12px;
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
  background: black;
  border-radius: 8px;
}

.card-link {
  opacity: 0;
}

.card-link:hover {
  opacity: 0.1;
}
</style>
