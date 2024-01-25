<template>
  <div class="ui-navBottom">
    <router-link to="" class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">홈</span>
    </router-link>

    <router-link to="" class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">동네생활</span>
    </router-link>

    <router-link to="" class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">내 근처</span>
    </router-link>

    <router-link to="" class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">채팅</span>
    </router-link>

    <router-link to="" class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">나의 당근</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';

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
  z-index: 9999;

  .ui-navBottom-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .text {
      margin-top: 0.6rem;
      font-size: 1.2rem;
      color: white;
    }
  }
}
</style>