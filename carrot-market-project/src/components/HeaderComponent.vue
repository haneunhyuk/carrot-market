<template>
  <div class="header">
    <div v-if="hasSelectBtn" class="header-tit select-location">
      <button type="button" @click="ToggleSelect">
        {{ props.location }}
        <span class="select-icon" :class="active?'flip':''">
          <Icon src="ic_arrow" width="24px" height="24px" :cover="false"></Icon>
        </span>
      </button>
    </div>
    <div v-else class="header-tit">
      <button type="button">중구</button>
    </div>
    <div class="icon-wrap">
      <button type="button">
        <Icon src="ic_profile" width="24px" height="24px" :cover="false" />
      </button>
      <button type="button">
        <Icon src="ic_search" width="24px" height="24px" :cover="false" />
      </button>
      <button type="button">
        <Icon src="ic_alarm" width="24px" height="24px" :cover="false" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
  hasSelectBtn : String,
  location:String,
})

const active = ref(false);

const ToggleSelect = () => active.value = !active.value;

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 1.5rem;
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
    .icon {
      margin-left: 1.5rem;
    }
  }
}

</style>