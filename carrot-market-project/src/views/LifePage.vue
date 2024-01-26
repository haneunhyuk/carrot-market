<template>
  <div>
    <FilterComponont :data="activeData[0]"></FilterComponont>
  </div>
</template>

<script setup lang="ts">
import FilterComponont from '@/components/FilterComponont.vue';
import { baseData } from '@/datas/datas'
import { ref, watch, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  path: string
}>()

const activeData = ref()

watch(() => {
  activeData.value = baseData.filter((data: any) => data.path.replace('/','') == props.path)
})
</script>

<style scoped>

</style>