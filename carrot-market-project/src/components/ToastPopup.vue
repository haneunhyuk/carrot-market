<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { type toastInterface } from '@/datas/datas'

const props = defineProps<{
            lists: toastInterface
    }>(),
    open = ref(false),
    selected = ref<any>()

    selected.value = props.lists.location.filter((list: any) => list.select)[0]

const selectList = (el: object) => {
    selected.value = el
    open.value = false
}
</script>

<template>
    <div class="popup toast">
        <button type="button" class="btn-toast" @click="open = true">{{ selected.title }}</button>
        <Transition name="show">
            <ul v-if="open" class="lists">
                <li v-for="list in lists.location" class="list" :key="list.title">
                    <button type="button" @click="() => selectList(list)">{{ list.title }}</button>
                </li>
            </ul>
        </Transition>
    </div>
</template>

<style scoped>
.popup {
    position: relative;
}

.btn-toast {
    color: #fff;
}

.lists {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 10rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    overflow: hidden;
}

.show-enter-active,
.show-leave-active {
    transition: 0.3s ease;
}

.show-enter-from,
.show-leave-to {
    height: 0;
    padding: 0;
}

.list button {
    display: block;
}

</style>