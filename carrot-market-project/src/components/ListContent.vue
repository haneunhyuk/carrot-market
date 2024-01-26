<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    content: {
        more?: boolean
        img?: string
        title: string
        subTxt: {
            locale: string
            time: string
            visit?: string
            price?: number
            like?: number
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
                    <span v-if="key !== 'price'" :class="key">{{ item }}</span>
                    <div v-else-if="item == 0" :class="key">나눔</div>
                    <div v-else :class="key">{{ item?.toLocaleString() }}원</div>
                </template>
                <!-- <span v-for="item in content.subTxt" :key="item">{{ item }}</span> -->
            </div>
        </div>
        <button v-if="content.more != false" class="more">
            <span class="sr-only">더보기</span>
        </button>
    </div>
</template>

<style lang="scss">
.content {
    position: relative;
    display: flex;
    gap: 0 1rem;
    padding: 1rem;
    & + .content {
        border-top: 0.1rem solid #666;
    }
    &:last-child {
        border-bottom: 0.1rem solid #666;
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
        top: 1.5rem;
        right: 1rem;
        width: 2rem;
        height: 2rem;
        background: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none"/><circle cx="12" cy="7" r="0.5" transform="rotate(90 12 7)" stroke="%23999999" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="0.5" transform="rotate(90 12 12)" stroke="%23999999" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="0.5" transform="rotate(90 12 17)" stroke="%23999999" stroke-linecap="round" stroke-linejoin="round"/></svg>') no-repeat center / cover;
    }
    .like {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        padding-left: 2rem;
        font-size: 1.6rem;
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 1.8rem;
            height: 1.8rem;
            background: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="%23999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>') no-repeat center / cover;
        }
    }
}
</style>