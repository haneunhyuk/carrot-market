<template>
  <!-- :location="userLocation[0].name" -->
  <header-component
      has-select-btn="true"
      :path="path"
    >
    </header-component>
    <div class="container">
      <router-view :path="path"/>
    </div>
    <bottom-nav></bottom-nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import BottomNav from './components/BottomNav.vue';
import { computed, ref, watch } from 'vue';

const route = useRoute();

const currentPath = ref(route.path),
      path = ref()
      
watch(() => {
  currentPath.value = route.path;
  const currentPagePath = currentPath.value.split('/');
  // console.log(currentPagePath[currentPagePath.length-1]);
  path.value = currentPagePath[currentPagePath.length-1]
});
</script>

<style lang="scss" >
#app {
  height: 100%;
  .container {
    height: calc(100% - 7rem);
    padding-top: 4rem;
  }
}
</style>