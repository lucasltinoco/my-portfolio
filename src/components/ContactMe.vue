<template>
  <section id="contact-me">
    <transition name="fade" mode="out-in">
    <form v-if="lang === 'eng'" class="form" key="eng" @submit="submitEmail">
      <label for="subject">Subject:</label>
      <br />
      <input type="text" id="subject" name="subject" placeholder="Enter subject..." v-model="form.subject" required/>
      <br />
      <br />
      <label for="text">Text:</label>
      <br />
      <textarea type="text" id="text" name="text" placeholder="Enter text..." v-model="form.body" required></textarea>
      <br />
      <input type="submit" value="Submit" id="submit"/>
      <input type="reset" value="Reset" id="reset" @click="resetVars"/>
    </form>
    <form v-else-if="lang === 'por'" class="form" key="por" @submit="submitEmail">
      <label for="subject">Assunto:</label>
      <br />
      <input type="text" id="subject" name="subject" placeholder="Insira o assunto..." v-model="form.subject" required/>
      <br />
      <br />
      <label for="text">Texto:</label>
      <br />
      <textarea type="text" id="text" name="text" placeholder="Insira o texto..." v-model="form.body" required></textarea>
      <br />
      <input type="submit" value="Submeter" id="submit" />
      <input type="reset" value="Resetar" id="reset" @click="resetVars"/>
    </form>
    </transition>
    <footer class="footer">© Lucas Tinoco 2020</footer>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyProjects",
  computed: mapState(["lang"]),
  data: function() {
    return {
      form: {
        subject: "",
        body: ""
      }
    };
  },
  methods: {
    submitEmail(e) {
      document.location.href = `mailto:lucasltinoco@gmail.com?subject=${this.form.subject}&body=${this.form.body}`;
      e.preventDefault();
    },
    resetVars() {
      this.form.subject = "";
      this.form.body = "";
    }
  }
};
</script>

<style>
.form {
  width: 80vw;
  max-width: 1000px;
  text-align: center;
}

#text,
#subject {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid var(--secondary-txt-color);
  border-radius: 4px;
  font-size: var(--txt-size);
  background-color: var(--bg-color);
  color: var(--primary-txt-color);
  outline: none;
  resize: none;
  transition: 0.5s;
  overflow: auto;
}

#subject {
  height: 40px;
}

#text {
  height: 250px;
}

#text::-webkit-scrollbar {
  width: 12px;
  cursor: default;
}

#text::-webkit-scrollbar-track {
  background-color: var(--secondary-txt-color);
  border-radius: 4px;
}

#text::-webkit-scrollbar-thumb {
  background: var(--bg-color);
  border: 2px solid var(--secondary-txt-color);
  border-radius: 4px;
}

#submit,
#reset {
  background-color: var(--bg-color);
  border: none;
  color: var(--secondary-txt-color);
  text-align: center;
  text-decoration: none;
  transition: 0.5s;
  outline: none;
  margin: 1px;
  font-size: var(--txt-size);
  cursor: pointer;
}

.footer {
  position: absolute;
  bottom: 0;
  font-size: calc(var(--txt-size)*3/4);
}
</style>