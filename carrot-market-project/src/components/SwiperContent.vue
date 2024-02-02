<template>
    <div class="area-swiper">
        <div class="title">{{title}}</div>
        <Swiper
            :module="[Pagination]"
            :slides-per-view="1"
            :pagination="true"
            @slide-change="handleSwiper"
        >
            <SwiperSlide v-for="(cont, key) in data" :key="key">
                <ListContent v-for="(c, key) in Array.from(cont)"  :key="key" :content="JSON.parse(JSON.stringify(c))" :is-right-img="isRightImg"/>
            </SwiperSlide>
        </Swiper>
        <button type="button">
            <span>더보기</span>
            <IconComponent :src="`ic_arrow`" width="20px" height="20px" :cover="false"></IconComponent>
        </button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import IconComponent from './IconComponent.vue';
import ListContent from './ListContent.vue';
import 'swiper/css'
import 'swiper/css/pagination'
import { SwiperModule } from 'swiper/types';

const props = defineProps<{
    title: string
    data: object
    isRightImg?: boolean
}>()

const keys = Object.keys(props.data)

const handleSwiper = (swiper: any) => {
    console.log(keys[swiper.activeIndex])
}
</script>

<style lang="scss" scoped>
.area-swiper {
    .title {
        padding: 0 2rem;
        font-size: 1.8rem;
        font-weight: 700;
    }
    .swiper-wrapper {
        .swiper-slide {
            padding: 0 2rem;
            .content-wrap {
                background-color: #fff;
                .tags {
                display: inline-block;
                }
                .title {
                    display: inline-block;
                }
            }
        }
    }
    button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    span {
        font-size: 1.6rem;
        line-height: 4rem;
        color: #999;
    }
    .icon {
        display: inline-block;
        transform: rotate(-90deg);
    }
}
}
</style>