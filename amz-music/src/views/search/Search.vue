<template>
  <van-popup
    v-model="$store.state.isShowSearch"
    position="right"
    closeable
    close-icon="arrow-left"
    close-icon-position="top-left"
    :style="{ width: '100%' }"
  >
    <div class="search">
      <div class="header" @click="backToHome">
        <div class="search-input">
          <input type="text" />
        </div>
          <span>搜索</span>
      </div>
    </div>
  </van-popup>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  name: "Search",
  data() {
    return {
      show: false
    };
  },
  methods: {
    backToHome() {
      this.$router.back();
    }
  }
};
</script>

<style lang="stylus" scoped>
.search 
  height 100vh
  .header 
    display flex
    position relative
    top 15px
    left 50px
    .search-input 
      width 70%
      height 24px
      border-radius 12px
      background-color #eee
      border none
      text-align center
      input
        width 80%
        height 100%
        border none
        background-color #eee
.header span {
  color: #111;
  line-height: 24px;
  margin-left: 20px;
}
</style>