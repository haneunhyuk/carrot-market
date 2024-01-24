<script setup lang="ts">
import {type listInterface} from '@/datas/datas'
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
        lists: listInterface,
        isOpen: boolean
    }>(),
    emits = defineEmits(['closePopup'])
</script>

<template>
    <div class="popup bottom-sheet" :class="{open: isOpen}">    
        <div class="popup-content">
            <div class="title">{{ lists.title }}</div>
            <ul class="lists">
                <li v-for="subject in lists.subjects" :key="subject" class="list">
                    <button type="button" @click="() => {emits('closePopup')}">
                        {{ subject }}
                    </button>
                </li>
            </ul>
        </div>
        <div class="bg"></div>
    </div>
</template>

<style scoped>
.popup.bottom-sheet {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.popup.open {
    z-index: 20;
}

.popup.open .popup-content {
    bottom: 0;
    transition: 0.15s ease-in-out;
}

.popup.open .bg {
    opacity: 0.5;
    background-color: #1d1f22;
}

.popup-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    z-index: 21;
    bottom: -100%;
    left: 0;
    width: 100%;
    max-height: calc(100% - 8rem);
    padding: 2rem;
    border-radius: 1rem 1rem 0 0;
    background-color: #252628;
}

.title {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    line-height: 3rem;
    color: #eee;
}

.lists {
    overflow-y: scroll;
    height: 100%;
}

.list button {
    display: block;
    width: 100%;
    border: 0;
    background-color: transparent;
    font-size: 1.4rem;
    line-height: 4rem;
    color: #ddd;
    text-align: left;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>