<template>
  <div class="search" v-show="$store.state.isShowSearch">
    <div class="header">
      <div @click="backToHome" class="back">
        <img src="~assets/img/search/back.png" alt="">
      </div>
      <div class="search-input">
        <input type="text" />
      </div>
      <span>搜索</span>
    </div>
    <search-hot-list :hotList="hotList" />
  </div>
</template>

<script>
import SearchHotList from './childComponents/SearchHotList'

import { getHotSearch } from 'network/search'
export default {
  name: "Search",
  components: {
    SearchHotList
  },
  data() {
    return {
      hotList: null
    }
  },
  created() {
    getHotSearch().then(res => {
      this.hotList = res.data
    }) 
  },
  methods: {
    backToHome() {
      this.$store.commit('backToHome')
    }
  }
};
</script>

<style lang="stylus" scoped>
.search
  height: 100vh;
  position fixed
  top 0
  right 0
  left 0
  bottom 0
  background-color #fff
  z-index 2020
  .header 
    display: flex;
    height 50px
    align-items center
    .back
      img 
        width 20px
        height 20px 
    .search-input 
      width: 70%;
      height: 24px;
      border-radius: 12px;
      background-color: #eee;
      border: none;
      text-align: center
      input 
        width: 80%;
        height: 100%;
        border: none;
        background-color: #eee
    span
      color: #111
      line-height: 24px
      margin-left: 20px
</style>