<template>
  <div class="my-projects">
    <header>my projects</header>
    <div class="my-projects-content">
      <p>My Projects Content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects"
};
</script>

<style>
.my-projects-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>