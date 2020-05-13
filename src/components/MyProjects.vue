<template>
  <div id="my-projects">
    <h1>my projects</h1>
      <p>My Projects Content</p>
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

#my-projects p {
  font-size: 1.5rem;
  width: 75vw;
}
</style>