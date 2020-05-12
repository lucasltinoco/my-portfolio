<template>
  <div class="about-me">
		<header>about me</header>
    <div class="about-me-content">
      <p>About Me Content</p>
    </div>
	</div>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style>
.about-me-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>