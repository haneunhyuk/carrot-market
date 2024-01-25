<template>
  <div>
    <the-header
      has-select-btn="true"
      :location="userLocation[0].name"
    >
    </the-header>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './../components/HeaderComponent.vue';
import BottomNav from '@/components/BottomNav.vue';
import { useRoute } from 'vue-router';

const route = useRoute().path.split('/')

console.log('path: ' + route[route.length-1])

interface user {
  name:string,
  select: boolean
}

const userLocation:user[] = [
  { name: "종로 3가" , select: true },
  { name: "중구", select: false }
]
</script>

<style scoped>

</style>