<template>
  <div>
    <div v-if="select" class="select">
      <button type="button">{{ location }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  select : String
})

const location = '중구';
</script>

<style scoped>

</style>