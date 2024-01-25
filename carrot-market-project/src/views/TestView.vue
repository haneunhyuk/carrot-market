<template>
    <button type="button" @click="openFull = true">FULL</button>
    <button type="button" @click="openBottom = true">Bottom Sheet</button>
    <FullPopup :title="'내 물건 팔기'" :isOpen="openFull" :btn-opt="{btnText: '작성 완료'}" @close-popup="openFull = false" />
    <BottomSheet :lists="listsBottomSheet" :isOpen="openBottom" @close-popup="openBottom = false"/>
    <ToastPopup :lists="listsToast" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { listsBottomSheet, listsToast } from '@/datas/datas'
import FullPopup from '@/components/FullPopup.vue'
import BottomSheet from '@/components/bottomSheet.vue'
import ToastPopup from '@/components/ToastPopup.vue';

const openFull = ref(false),
      openBottom = ref(false)
</script>

<style scoped>
button {
    color: #fff;
}

button + button {
    margin-left: 3rem;
}
</style>
