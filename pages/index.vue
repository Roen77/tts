<template>
<<<<<<< HEAD
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        library-client
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
=======
  <div class="home_inner">
    <div class="bg">
>>>>>>> b4a5cc973cbe1a27260eca07186d2849374b67b7
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home'
}
</script>

<style>
.home_inner{
  padding:100px 30px 30px 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.bg{
  margin: 0 auto;
  border-radius: 30px;
  width: 1400px;
  max-width: 100%;
  position: relative;
  border: 3px solid #ddd;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/lib_bg-80.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-position: 50% top;
  background-size: cover;
  height: 100%;
}
</style>
