<template>
  <div>
    <ul ref="category" class="category" :is_open="open">
      <li v-for="cont in activeData[0].category.cont" :key="cont" class="category-item" :class="{'open-category': cont.txt == '더보기'}">
        <button type="button" @click="handleClick(cont.txt)">
          <IconComponent :src="`ic_${cont.src}`" width="32px" height="32px" :cover="false" />
          <span>{{ cont.txt }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch, ref } from 'vue';
import { baseData } from '@/datas/datas';
import IconComponent from '@/components/IconComponent.vue';
const props = defineProps<{
  path: string 
}>()

const activeData = ref(),
      open = ref(false),
      category = ref()

const handleClick = (txt: string) => {
  let sHeight = category.value.children[0].offsetHeight,
      totalLine = category.value.children.length
      
  if(txt == '더보기') {
    open.value = true
  }
}

watch(() => {
  activeData.value = baseData.filter((data: any) => data.path.replace('/','') == props.path)
})
</script>

<style lang="scss" scoped>
.near {
  .category {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 2rem;
    height: 20.5rem;
    transition: .3s linear;
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5.5rem;
      button {
        .icon {
          margin: 0 auto 0.5rem;
        }
        span {
        font-size: 1.2rem;
        color: #999;
      }
      }
    }
    &[is_open=true] {
      height: 100%;
      .category-item {
        &.open-category {
          display: none;
        }
      }
    }
  }
}
</style>