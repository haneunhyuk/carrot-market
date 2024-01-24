<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{
            title: string
            isOpen?: boolean
            btnOpt?: {
                btnText: string,
            }
    }>(),
    emits = defineEmits(['closePopup'])

</script>

<template>
    <div class="popup full" :class="{open: isOpen}">
        <div class="title">
            {{ title }}
            <!-- <slot name="title" /> -->
            <button type="button" class="close-popup" @click="emits('closePopup')">
                <span class="sr-only">닫기</span>
            </button>
        </div>
        <div class="content"></div>
        <div v-if="btnOpt" class="bottom-fixed">
            <button type="button" @click="emits('closePopup')">
                {{ btnOpt.btnText }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.popup.full {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 10;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1d1f22;
}

.popup.open {
    top: 0;
    transition: 0.15s ease-in-out;
}

.title {
    position: relative;
    border-bottom: 0.1rem solid #444;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 4rem;
    text-align: center;
    color: #fff;
}

.close-popup {
    position: absolute;
    top: 0.8rem;
    left: 2rem;
    width: 2.4rem;
    height: 2.4rem;
    border: 0;
    background-color: transparent;
}

.close-popup::before,
.close-popup::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2rem;
    height: 0.2rem;
    background-color: #fff;
}

.close-popup::before {
    transform: translate(-50%, -50%) rotate(45deg);
}

.close-popup::after {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.bottom-fixed {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    border-top: 0.1rem solid #444;
}

.bottom-fixed button {
    display: block;
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    background-color: #FF6F0F;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 4rem;
    color: #fff;
}
</style>