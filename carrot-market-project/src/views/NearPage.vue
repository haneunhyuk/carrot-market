<template>
  <div>
    <div class="category-wrap">
      <ul ref="category" class="category" :is_open="open">
        <li v-for="cont in activeData[0].category.cont" :key="cont" class="category-item" :class="{'open-category': cont.txt == '더보기'}">
          <button type="button" @click="handleClick(cont.txt)">
            <IconComponent :src="`ic_${cont.src}`" width="32px" height="32px" :cover="false" />
            <span>{{ cont.txt }}</span>
          </button>
        </li>
      </ul>
      <button v-show="open" type="button" class="close-category" @click="handleClick()">
        <span>접기</span>
        <IconComponent :src="`ic_arrow`" width="20px" height="20px" :cover="false"/>
      </button>
    </div>
    <SwiperContent :title="'우리동네 업체 소식'" :data="activeData[0].content" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch, ref } from 'vue';
import { baseData } from '@/datas/datas';
import IconComponent from '@/components/IconComponent.vue';
import SwiperContent from '@/components/SwiperContent.vue'
const props = defineProps<{
  path: string 
}>()

const activeData = ref(),
      open = ref(false),
      category = ref()

const handleClick = (txt?: string) => {
  let sHeight = category.value.children[0].offsetHeight,
      totalLine = Math.ceil((category.value.children.length - 1) / 4)
  if(txt == '더보기') {
    open.value = true
    category.value.style.height = `${sHeight * totalLine + 10 * (totalLine - 1) + 40}px`
  } else if(txt == null) {
    open.value = false
    category.value.style.height = `21.5rem`
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
    height: 21.5rem;
    transition: .15s linear;
    &-item {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5.5rem;
      button {
        display: block;
        width: 100%;
        .icon {
          margin: 0 auto 0.5rem;
        }
        span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 1.2rem;
          color: #999;
      }
      }
    }
    &[is_open=true] {
      // height: 100%;
      .category-item {
        &.open-category {
          display: none;
        }
      }
    }
  }
  .close-category {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    line-height: 4rem;
    color: #999;
    .icon {
      display: inline-block;
      transform: rotate(180deg);
    }
  }
}
</style>