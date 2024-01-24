<template>
  <div
    :class="`icon ${props.cover ? 'ui-bg-img' : 'ui-bg-img-contain'}`"
    :style="{
      backgroundImage: 'url(' + require(`@/assets/images/${props.src}.png`) + ')',
      width: props.width,
      height: props.height,
    }"
    @click="$emit('click', true)"
  >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  cover: {
    type: Boolean,
    default: true,
  }
})
</script>

<style lang="scss" scoped>
.ui-bg-img {
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  &-contain {
    background-size: contain;
  }
}
</style>