<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1D82FE">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img :src="item.pic" alt="" :style="{height: height, width: width}">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
    height: String,
    width: String
  },
}
</script>

<style lang="stylus" scoped>
.my-swipe
  width 100%
  text-align center
  img 
   border-radius 5px
</style>