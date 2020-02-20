<template>
  <div class="search" v-show="$store.state.isShowSearch">
    <search-header />
    <search-hot-list :hotList="hotList" />
  </div>
</template>

<script>
import SearchHeader from './childComponents/SearchHeader'
import SearchHotList from './childComponents/SearchHotList'
import { getHotSearch } from 'network/search'
export default {
  name: "Search",
  components: {
    SearchHeader,
    SearchHotList
  },
  data() {
    return {
      hotList: null,
    }
  },
  created() {
    // 获取热搜数据
    getHotSearch().then(res => {
      this.hotList = res.data
    }) 
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
  
</style>