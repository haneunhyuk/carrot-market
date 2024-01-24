<template>
  <div class="header">
    <div v-if="selectBtn" class="header-tit select-location">
      <button type="button">{{ location }}</button>
    </div>
    <div v-else class="header-tit">
      <button type="button">중구</button>
    </div>
  </div>
  <button type="button" class="testBtn" @click="selectBtn">
    해더 타이틀 샐렉트 변경 버튼
  </button>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
  select : String
})

const selectBtn = ref(false);

const location = '중구3333';

const ToggleSelect = () => selectBtn.value = !selectBtn.value;
</script>

<style lang="scss" scoped>
.header {
  .header-tit {
    button {
      font-size: 2rem;
      font-weight: 700;
      color: grey;
    }
  }
}

.testBtn {
  font-size: 1.5rem;
  color: white;
}
</style>