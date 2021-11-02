<template>
  <div class="container home">
    <main class="home_con">
      <h1 class="logo en">
        <NuxtLink class="primary" to="/">
          <span>S</span>'BOOK
        </NuxtLink>
      </h1>
      <Nuxt />
    </main>
  </div>
</template>
<style scoped>
.container.home{display: flex; align-items: center; justify-content: center;}
.home_con{text-align: center; width: 100%;}
.logo.en{margin-bottom: 10px;}
</style>
