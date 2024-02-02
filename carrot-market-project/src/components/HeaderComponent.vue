<template>
  <div class="header" :isMyPage="path == 'mypage'">
    <!-- <div v-if="hasSelectBtn" class="header-tit select-location">
      <ToastPopup :lists="listsToast" />
    </div>
    <div v-else class="header-tit">
      <button type="button">중구</button>
    </div> -->
    <div v-show="path != 'mypage'" class="header-tit select-location">
      <templage v-if="path == 'chat'">
        <div>{{ selectVal }}</div>
      </templage>
      <template v-else>
        <ToastPopup :lists="listsToast" @chagne="(target) => selectVal = target.title"/>
      </template>
    </div>
    <div class="icon-wrap">
      <button v-for="icon in activeData[0].header" :key="icon" type="button">
        <IconComponent :src="`ic_${icon}`" width="24px" height="24px" :cover="false" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
import IconComponent from './IconComponent.vue';
import { listsBottomSheet, listsToast,  baseData } from '@/datas/datas'
import ToastPopup from './ToastPopup.vue';

const props = defineProps({
  hasSelectBtn : String,
  location:String,
  path:String
})

const active = ref(false),
      activeData = ref(),
      selectVal = ref(listsToast.location.filter((list: any) => list.select)[0].title)

watch(() => {
  activeData.value = baseData.filter((data: any) => data.path.replace('/','') == props.path)
})

const ToggleSelect = () => active.value = !active.value;

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  background-color: #1d1f22;
  z-index: 10;
  &[isMyPage=true] {
    justify-content: flex-end;
  }
  .header-tit {
    button {
      font-size: 2rem;
      font-weight: 700;
      color: white;
    }
    &.select-location {
      button {
        display: flex;
        align-items: center;
        transition: transform .3s ease-in-out !important;
        .select-icon {
          transition: all 0.4s;
          transform: rotateX(0deg);
          &.flip {
            transform: rotateX(180deg);
          }
        }

        
        .icon {
          margin-left: 0.5rem;
        }
      }
    }
  }
  .icon-wrap {
    display: flex;
    button {
      margin-left: 1.5rem;
    }
  }
}

</style>