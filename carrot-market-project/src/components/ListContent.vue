<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    content: {
        more?: boolean
        img?: string | string[]
        tag?: string[]
        title: string
        subTitle?: string
        subTxt: {
            locale: string
            time: string
            price?: number
            watch?: string
        },
        react: {
            like?: number
            thumb?: number
            comment?: number
        } 
    }
}>()
</script>

<template>
    <div class="content">
        <div v-if="content.img" class="img-wrap">
            <!-- <img :src="`@/images/img_${content.img}.png`"> -->
            <template v-if="typeof content.img == 'string'">
                <img :src="require(`@/assets/images/img_${content.img}.png`)" >
            </template>
            <template v-else>
                <span v-if="content.img.length > 1" class="cnt-img">{{ content.img.length }}</span>
                <img v-for="img of content.img" :src="require(`@/assets/images/img_${img}.png`)" :key="img" >
            </template>
        </div>
        <div class="content-wrap" :exist_more="content.more">
            <ul v-if="content.tag" class="tags">
                <li v-for="tag in content.tag" :key="tag" class="tag" :class="{'popular': tag=='인기'}">
                    {{ tag }}
                </li>
            </ul>
            <h2 class="title">{{ content.title }}</h2>
            <p class="subTitle">{{ content.subTitle }}</p>
            <div class="subTxt">
                <template v-for="(item, key) of content.subTxt" :key="item">
                    <!-- <span v-if="key !== 'price'" :class="key">{{ item }}</span> -->
                    <span v-if="key !== 'price'" :class="key">
                        <template v-if="key == 'watch'">조회 {{ item }}</template>
                        <template v-else>{{ item }}</template>
                    </span>
                    <div v-else-if="item == 0" :class="key">나눔</div>
                    <div v-else :class="key">{{ item?.toLocaleString() }}원</div>
                </template>
                <!-- <span v-for="item in content.subTxt" :key="item">{{ item }}</span> -->
            </div>
        </div>  
        <div class="react-wrap">
            <span v-for="(item, key) of content.react" class="react-icon" :class="key" :key="item">
                <!-- <template v-if="key=='like'">{{ item }}</template> -->
                {{ item }}
            </span>
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
        flex-shrink: 0;
        width: 10rem;
        height: 10rem;
        border-radius: 1rem;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    &-wrap {
        overflow: hidden;
        width: 100%;
        &:not([exist_more=false]) {
            margin-right: 2rem;
        }
        .tags {
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            gap: 0 0.5rem;
            height: 1.8rem;
            margin-bottom: 1rem;
            .tag {
                flex-shrink: 0;
                padding: 0.2rem 0.5rem;
                border-radius: 0.3rem;
                background-color: #2a2929;
                font-size: 1rem;
                color: #ccc;
                &.popular {
                    background-color: rgb(99, 139, 233);
                }
            }
        }
        .title {
            font-size: 1.6rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .subTitle {
            font-size: 1.4rem;
            color: #999;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .subTxt {
            span {
                font-size: 1.2rem;
                color: #999;
                & + span:not(.like) {
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
    .react-wrap {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        .react-icon {
            position: relative;
            padding-left: 1.6rem;
            font-size: 1.4rem;
            line-height: 1.8rem;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 1.4rem;
                height: 1.4rem;
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: center;
            }
            &.like::before {
                background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="%23999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            }
            &.thumb::before {
                background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99997 20H17.1919C17.9865 20 18.7058 19.5296 19.0243 18.8016L21.8323 12.3833C21.9429 12.1305 22 11.8576 22 11.5816V11C22 9.89543 21.1045 9 20 9H13.5L14.7066 4.5757C14.8772 3.95023 14.5826 3.2913 14.0027 3.00136V3.00136C13.4204 2.7102 12.7134 2.87256 12.3164 3.3886L8.41472 8.46082C8.14579 8.81044 7.99997 9.23915 7.99997 9.68024V20ZM7.99997 20H2V10H7.99997V20Z" stroke="%23999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            }
            &.comment::before {
                background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8" standalone="no"%3F><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>comment-1</title><desc>Created with Sketch Beta.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-100.000000, -255.000000)" fill="%23999999"><path d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z" id="comment-1" sketch:type="MSShapeGroup"></path></g></g></svg>');
            }
            &.person::before {
                background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg fill="%23999999" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/></svg>');
            }
            & + .react-icon {
                margin-left: 0.4rem;
            }
        }
    }
    &.life {
        .img-wrap {
            position: relative;
            order: 1;
            width: 8rem;
            height: 8rem;
            .cnt-img {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 2rem;
                height: 2rem;
                border-radius: 0 0 0.5rem 0;
                background-color: rgba(#000, 0.75);
            }
            img {
                object-fit: cover;
                & + img {
                    display: none;
                }
            }
            & + .content-wrap {
                .subTxt {
                    margin-top: 4rem;
                }
            }
        }
    }
}
</style>