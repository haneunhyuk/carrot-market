<template>
  <div class="ui-navBottom">
    <!-- <router-link to="/" class="ui-navBottom-btn" :active-class="'active'">
      <IconComponent src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">홈</span>
    </router-link>

    <router-link to="/life" class="ui-navBottom-btn">
      <IconComponent src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">동네생활</span>
    </router-link>

    <router-link to="/near" class="ui-navBottom-btn">
      <IconComponent src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">내 근처</span>
    </router-link>

    <router-link to="/chat" class="ui-navBottom-btn">
      <IconComponent src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">채팅</span>
    </router-link>

    <router-link to="/mypage" class="ui-navBottom-btn">
      <IconComponent src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">나의 당근</span>
    </router-link> -->
    <router-link v-for="data in baseData" :key="data.title" :to="data.path" class="ui-navBottom-btn" :active-class="'active'">
      <IconComponent :src="`bottom_nav/ic_home`" width="24px" height="24px" :cover="false" />
      <span class="text">{{ data.title }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconComponent from './IconComponent.vue';
import { baseData } from '@/datas/datas'
</script>

<style lang="scss">
.ui-navBottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 7rem;
  margin: auto;
  border-top: 1px solid #eee;
  background-color: #1d1f22;
  z-index: 999;

  .ui-navBottom-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    opacity: 0.5;

    &.active {
      opacity: 1;
    }

    .text {
      margin-top: 0.6rem;
      font-size: 1.2rem;
      color: white;
    }
  }
}
</style>