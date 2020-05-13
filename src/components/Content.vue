<template>
  <div class="content">
    <Home />
    <WhoIAm />
    <WhatIDo />
    <MyProjects />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import Home from "./Home";
import WhoIAm from "./WhoIAm";
import WhatIDo from "./WhatIDo";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

export default {
  name: "Content",
  components: {
    Home,
    WhoIAm,
    WhatIDo,
    MyProjects,
    ContactMe,
    Footer
  }
};
</script>

<style>
.content {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 75vw;
}

h1 {
  position: sticky;
  top: 5vh;
  font-size: 2.5rem;
  font-weight: 900;
}

.fa-chevron-down,
.fa-chevron-down:hover {
  padding-bottom: 10vh;
  text-decoration: none;
  color: #000;
}
</style>