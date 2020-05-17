<template>
  <div id="contact-me">
    <h1>contact me!</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Subject:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.subject"
          type="subject"
          required
          placeholder="Enter subject"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Text:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.body"
          required
          placeholder="Enter text"
          rows="6"
          max-rows="12"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Send me!</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <a href="#home" class="fa fa-chevron-up"></a>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  data: function() {
    return {
      form: {
        subject: "",
        body: ""
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      document.location.href = 
        `mailto:lucasltinoco@gmail.com?subject=${this.form.subject}&body=${this.form.body}`
    },
    onReset(e) {
      e.preventDefault();
      this.form.subject = "";
      this.form.body = "";
    }
  }
};
</script>

<style>
#contact-me {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.fa-chevron-up,
.fa-chevron-up:hover {
  margin-bottom: 10vh;
  text-decoration: none;
  color: #000;
}
</style>