<template>
    <button type="button" @click="openFull = true">FULL</button>
    <button type="button" @click="openBottom = true">Bottom Sheet</button>
    <FullPopup :title="'내 물건 팔기'" :isOpen="openFull" :btn-opt="{btnText: '작성 완료'}" @close-popup="openFull = false" />
    <BottomSheet :lists="lists" :isOpen="openBottom" @close-popup="openBottom = false"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { lists } from '@/datas/datas'
import FullPopup from '@/components/FullPopup.vue'
import BottomSheet from '@/components/bottomSheet.vue'

const openFull = ref(false),
      openBottom = ref(false)
</script>
