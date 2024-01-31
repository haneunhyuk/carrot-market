<template>
  <div class="filter-area" :vertical="data?.vertical">
    <ul class="filter-list" :class="{'round-btn': data?.round, 'big': data?.big}">
      <li v-for="category in data?.cont" :key="category.txt">
        <button type="button" :class="{'all-btn': category.all}">
          <IconComponent v-if="category.all" :src="`ic_${category.src}`" width="18px" height="18px" :cover="false"><span class="all-btn-txt">전체</span></IconComponent>
          <IconComponent v-else-if="category.src" :src="`ic_${category.src}`" width="14px" height="14px" :cover="false"></IconComponent>
          <span class="category-txt">{{ category.txt }}</span>
        </button>
      </li>
    </ul>
    <!-- <ul class="filter-list" :class="{'round-btn': data?.category.round, 'big': data?.category.big}">
      <li v-for="category in data?.category.cont" :key="category.txt">
        <button type="button" :class="{'all-btn': category.all}">
          <IconComponent v-if="category.all" :src="`ic_${category.src}`" width="18px" height="18px" :cover="false"><span class="all-btn-txt">전체</span></IconComponent>
          <IconComponent v-else-if="category.src" :src="`ic_${category.src}`" width="14px" height="14px" :cover="false"></IconComponent>
          <span class="category-txt">{{ category.txt }}</span>
        </button>
      </li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import IconComponent from './IconComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
  data: Array,
})
</script>

<style lang="scss" scoped>
.filter-area {
  margin: 1rem 0;
  .filter-list {
    overflow: scroll;
    display: flex;
    padding: 0 1.5rem;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      display: none;
    }
    
    li {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      padding: 1rem 1.4rem;
      border-radius: 7px;
      background-color: black;

      button {
        display: flex;
      }

      .all-btn {
        display: flex;
        align-items: center;
        color: white;
        &-txt {
          margin-left: 0.5rem;
        }
        .icon {
          margin-right: 0;
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
      li {
        padding: 1rem 1.4rem;
        border: 1px solid #eee;
        border-radius: 5rem;
        background-color: transparent;
      }
    }
    &.big {
      li {
        padding: 1.2rem 1.6rem;
        font-size: 1.6rem;
      }
    }
  }
  &[vertical=true] {
    .filter-list {
      align-items: baseline;
      li {
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
    }
  }
}

</style>