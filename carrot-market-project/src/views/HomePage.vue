<template>
  <FilterComponont :data="activeData[0].category"></FilterComponont>
  <ListContent  v-for="cont in activeData[0].content" :key="cont.title" :content="cont" />
</template>

<script setup lang="ts">
import ListContent from '@/components/ListContent.vue';
import FilterComponont from '@/components/FilterComponont.vue';
import { baseData } from '@/datas/datas'
import { ref, watch, defineProps } from 'vue';

const props = defineProps<{
  path: string
}>()

const activeData = ref()

watch(() => {
  activeData.value = baseData.filter((data: any) => data.path.replace('/','') == props.path)
})

</script>

<style lang="scss">
</style>