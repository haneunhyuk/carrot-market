<template>
  <!-- {{ typeof activeData[0].category }} -->
  <FilterComponont :data="activeData[0]" :btn-type="activeData[0].categoryBtnType"></FilterComponont>
  <div class="content" v-for="cont in activeData[0].content" :key="cont.title">
    <ListContent :content="cont" />
  </div>
</template>

<script setup lang="ts">
import ListContent from '@/components/ListContent.vue';
import FilterComponont from '@/components/FilterComponont.vue';
import { baseData } from '@/datas/datas'
import { ref, watch, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  path: string
}>()

// const route = useRoute()
// console.log(route.path)

const activeData = ref()

watch(() => {
  activeData.value = baseData.filter((data: any) => data.path.replace('/','') == props.path)
})

</script>

<style lang="scss" scoped>
</style>