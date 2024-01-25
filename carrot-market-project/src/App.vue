<template>
  <!-- :location="userLocation[0].name" -->
  <header-component
      has-select-btn="true"
    >
    </header-component>
    <div class="container">
      <router-view/>
    </div>
    <button type="button" class="btn-write" @click="handleRoute(path)">글쓰기</button>
    <bottom-nav></bottom-nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import BottomNav from './components/BottomNav.vue';
import { computed, ref, watch } from 'vue';

const route = useRoute();

// 현재 경로를 저장하는 ref 변수
const currentPath = ref(route.path),
      path = ref()
// watch를 사용하여 라우트 변경 감지
watch(() => {
  currentPath.value = route.path;
  const currentPagePath = currentPath.value.split('/');
//  console.log(currentPagePath[currentPagePath.length-1]);
  path.value = currentPagePath[currentPagePath.length-1]
});



const handleRoute = (path: string) => {
  console.log(path)
}
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