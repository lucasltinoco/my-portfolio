<template>
  <div class="content">
    <Home />
    <AboutMe />
    <MyProjects />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import Home from "./Home";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

export default {
  name: "Content",
  components: {
    Home,
    AboutMe,
    MyProjects,
    ContactMe,
    Footer
  }
};
</script>

<style>
.content {
  margin: 0;
  height: 400vh;
}

header {
  position: sticky;
  top: 5vh;
  font-size: 2.5em;
  font-weight: 900;
}
</style>