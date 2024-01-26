<template>
  <div>
    <FilterComponont :data="activeData[0]"></FilterComponont>
    <ListContent  v-for="cont in activeData[0].content" :key="cont.title" :content="cont" :class="path"/>
  </div>
</template>

<script setup lang="ts">
import FilterComponont from '@/components/FilterComponont.vue';
import ListContent from '@/components/ListContent.vue';
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