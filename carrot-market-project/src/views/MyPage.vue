<template>
  <div>
    <FilterComponont :data="activeData[0].category" :btn-type="activeData[0].categoryBtnType" :whole-txt="activeData[0].categoryTxt"></FilterComponont>
  </div>
</template>

<script setup lang="ts">
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

<style scoped>

</style>