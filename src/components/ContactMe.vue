<template>
  <section id="contact-me">
    <div class="social-page">
      <div>
        <a href="https://www.linkedin.com/in/lucas-tinoco-783420194/" target="_blank">
          <i class="im im-linkedin"></i>
        </a>
        <transition name="fade" mode="out-in">
          <p v-if="lang === 'eng'" key="eng">DM me!</p>
          <p v-else-if="lang === 'por'" key="por">
            Manda<br />
            uma DM!
          </p>
        </transition>
      </div>
      <div>
        <a href="https://github.com/lucasltinoco" target="_blank">
          <i class="im im-github"></i>
        </a>
        <transition name="fade" mode="out-in">
          <p v-if="lang === 'eng'" key="eng">PR me!</p>
          <p v-if="lang === 'por'" key="por">
            Lança<br />
            um PR!
          </p>
        </transition>
      </div>
      <div>
        <a href="mailto:lucasltinoco@gmail.com" target="_blank">
          <i class="im im-newsletter"></i>
        </a>
        <transition name="fade" mode="out-in">
          <p v-if="lang === 'eng'" key="eng">Email me!</p>
          <p v-if="lang === 'por'" key="por">
            Envia<br />
            um Email!
          </p>
        </transition>
      </div>
      <div>
        <a href="https://www.instagram.com/lucasltinoco/" target="_blank">
          <i class="im im-instagram"></i>
        </a>
        <transition name="fade" mode="out-in">
          <p v-if="lang === 'eng'" key="eng">Follow me!</p>
          <p v-if="lang === 'por'" key="por">
            Me<br />
            segue!
          </p>
        </transition>
      </div>
    </div>
    <footer class="footer">© Lucas Tinoco 2020</footer>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyProjects",
  computed: mapState(["lang"]),
};
</script>

<style>
.social-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 50px;
}

.social-page div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.social-page p {
  font-size: calc(var(--txt-size) * 1.2);
  text-align: center;
  margin: 5px 0 0 0;
}

.social-page i {
  font-size: calc(var(--txt-size) * 5);
  color: var(--secondary-txt-color);
  transition: 0.5s;
}

.footer {
  position: absolute;
  bottom: 0;
  font-size: calc(var(--txt-size) * 3 / 4);
}
</style>
