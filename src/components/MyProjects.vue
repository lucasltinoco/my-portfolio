<template>
  <div id="my-projects">
    <h1>my projects</h1>
    <div class="tags">tags</div>
    <div class="projects">
      <div>
        <img
          src="@/assets/imgs/projects/proerd.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/knowledge.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/gallery.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/react_calculator.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/react_crud.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/vue_qrcode.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/vue_calculator.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/vue_montyhall.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/angular_crud.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
      <div>
        <img
          src="@/assets/imgs/projects/proerd.gif"
          alt="test"
          height="150px"
          width="150px"
        />
      </div>
    </div>
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

img {
  border-radius: 8px;
  margin: 10px;
}
</style>