<template>
  <div id="my-projects">
    <h1>my projects</h1>
    <div class="projects">
    <div class="tags">tags</div>
      <b-card-group deck>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
      </b-card-group>
      <b-card-group deck>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
        <b-card
          overlay
          img-src="https://media.giphy.com/media/3ov9k01Y5IKizNmC7S/giphy.gif"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        ></b-card>
      </b-card-group>
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin-bottom: 3vh;
  z-index: 0;
}

.tags {
  margin-top: 5vh;
}
</style>