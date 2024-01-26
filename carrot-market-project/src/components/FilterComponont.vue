<template>
  <div class="filter-area">
    <ul class="filter-list" :class="`${btnType}-btn`">
      <li>
        <button type="button" class="all-btn"><IconComponent src="ic_hamburger" width="18px" height="18px" :cover="false"></IconComponent><span v-if="wholeTxt" class="all-btn-txt">{{ wholeTxt }}</span></button>
      </li>
      <li v-for="category in data.category" :key="category.txt">
        <button type="button">
          <IconComponent v-if="category.src" :src="`ic_${category.src}`" width="14px" height="14px" :cover="false"></IconComponent>
          <span class="category-txt">{{ category.txt }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IconComponent from './IconComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
  wholeTxt : String,
  data: Array,
  btnType: String,
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
      &.big {
        li {
          padding: 1.2rem 1.6rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}

</style>