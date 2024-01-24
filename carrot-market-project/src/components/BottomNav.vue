<template>
  <div class="ui-navBottom">
    <div class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">홈</span>
    </div>

    <div class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">동네생활</span>
    </div>

    <div class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">내 근처</span>
    </div>

    <div class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">채팅</span>
    </div>

    <div class="ui-navBottom-btn">
      <Icon src="bottom_nav/ic_home" width="24px" height="24px" :cover="false" />
      <span class="text">나의 당근</span>
    </div>
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
  background-color: #fbfbfb;
  box-shadow: 0 0 15px rgba(152, 152, 152, 0.5);
  z-index: 9999;

  .ui-navBottom-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .text {
      margin-top: 1rem;
      font-size: 1.2rem;
      color: #5A5A5A;
    }
  }
}
</style>