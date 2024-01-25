<template>
  <div id="homepage">
    <h1>당근 마켓</h1>
    <h2>component</h2>
    <ul>
      <li><router-link to="header">header</router-link></li>
      <li><router-link to="bottom-nav">bottom_nav</router-link></li>
      <li><router-link to="popup">popup</router-link></li>
    </ul>
    <h2>page</h2>
    <ul>
      <li><router-link to="main-page">main</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
#homepage {
  padding: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fd5810;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>