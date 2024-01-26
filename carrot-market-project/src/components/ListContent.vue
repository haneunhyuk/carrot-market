<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    content: {
        hasMore?: boolean
        img?: string
        title: string
        subTxt: {
            locale: string
            time: string
            visit?: string
            price?: number
        }, 
    }
}>()

console.log(props.content)
</script>

<template>
    <div class="content">
        <div v-if="content.img" class="img-wrap">
            <!-- <img :src="`@/images/img_${content.img}.png`"> -->
            <img :src="require(`@/assets/images/img_${content.img}.png`)" >
        </div>
        <div class="content-wrap">
            <h2 class="title">{{ content.title }}</h2>
            <div class="subTxt">
                <template v-for="(item, key) of content.subTxt" :key="item">
                    <span v-if="key !== 'price'">{{ item }}</span>
                    <div v-else>{{ item?.toLocaleString() }}원</div>
                </template>
                <!-- <span v-for="item in content.subTxt" :key="item">{{ item }}</span> -->
            </div>
        </div>
        <div v-if="content.hasMore" class="more">
            더보기
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    position: relative;
    display: flex;
    gap: 0 1rem;
    padding: 1rem;
    & + .content {
        border-top: 0.1rem solid #666;
    }
    .img-wrap {
        width: 8rem;
        height: 8rem;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    &-wrap {
        .title {
            font-size: 1.6rem;
        }
        .subTxt {
            span {
                font-size: 1.2rem;
                color: #999;
                & + span {
                    position: relative;
                    padding-left: 1rem;
                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 0.4rem;
                        width: 0.3rem;
                        height: 0.3rem;
                        border-radius: 50%;
                        background-color:  #999;
                        transform: translateY(-50%);
                    }
                }
            }
        }
    }
    .more {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
}
</style>