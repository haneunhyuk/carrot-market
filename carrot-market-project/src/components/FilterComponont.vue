<template>
  <div class="swiper-filter" :vertical="data?.vertical">
      <div class="filter-list" :class="{'round-btn': data?.round, 'big': data?.big}">
          <swiper
              slidesPerView="auto"
              >
              <swiper-slide v-for="category in data?.cont" :key="category.txt">
                  <button type="button" :class="{'all-btn': category.all}">
                      <IconComponent v-if="category.all" :src="`ic_${category.src}`" width="14px" height="14px" :cover="false"></IconComponent>
                      <IconComponent v-else-if="category.src" :src="`ic_${category.src}`" width="14px" height="14px" :cover="false"></IconComponent>
                      <span class="category-txt">{{ category.txt }}</span>
                  </button>
              </swiper-slide>
          </swiper>
      </div>
  </div>
</template>
<script setup lang="ts">
import IconComponent from './IconComponent.vue';
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

const onSlideChange = () => {
console.log('slide change');
};

const props = defineProps({
data: Array,
wholeTxt: String
})
</script>

<style lang="scss" scoped>
.swiper-filter {
margin: 1rem 0;
.filter-list {
  padding: 0 1.5rem;
  .swiper-slide {
    width: auto;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    button {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      padding: 1rem 1.4rem;
      border-radius: 7px;
      background-color: black;
      &.all-btn {
        display: flex;
        align-items: center;
        color: white;
        &-txt {
          margin-left: 0.5rem;
        }
        .icon {
          margin-right: 0;
          & + span {
            margin-left: 0.5rem;
          }
        }
      }
    }
    
    .icon {
      margin-right: 0.5rem;
    }
    .category-txt {
      color: white;
    }
  }
  &.round-btn {
    .swiper-slide {
      button {
        padding: 0.8rem 1.2rem;
        border: 1px solid #eee;
        border-radius: 5rem;
        background-color: transparent;
        font-size: 1.2rem;
      }
    }
  }
  &.big {
    .swiper-slide {
      button {
        padding: 1rem 1.4rem;
        font-size: 1.4rem;
      }
    }
  }
}
&[vertical=true] {
  .filter-list {
    align-items: baseline;
    .swiper-slide {
      justify-content: center;
      width: 7rem;
      height: 7rem;
      padding: 0;
      border: 0;
      button {
        flex-direction: column;
        align-items: center;
        gap: 1rem 0;
        .category-txt {
          display:-webkit-box;
          -webkit-box-orient:vertical;
          overflow:hidden;
          -webkit-line-clamp:2;
        }
      }
      .icon {
        width: 3.6rem !important;
        height: 3.6rem !important;
        margin-right: 0;
      }
    }
    button {
      background-color: transparent;
    }
  }
}
}
</style>