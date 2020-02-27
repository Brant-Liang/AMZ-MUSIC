<template>
  <div class="search-history">
    <div class="header">
      <span>
        搜索历史
      </span>
      <div class="delete-all" @click="deleteAll" v-if="$store.state.searchHistory.length">
        <img src="~assets/img/search/delete.svg" alt="">
      </div>
    </div>
    <div class="history-list">
      <span v-for="(item, index) in SearchList" :key="index" @click="searchHistory(item)">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Dialog } from 'vant';

Vue.use(Dialog);
export default {
  name: 'SearchHistory',
  data() {
    return {
      show: false
    }
  },
  computed: {
    SearchList() {
      return this.$store.state.searchHistory
    }
  },
  methods: {
    deleteAll() {
      Dialog.confirm({
        title: '提示',
        message: '弹是否删除所有搜索记录'
      }).then(() => {
        this.$store.commit('deleteAll')
      })
    },
    // beforeClose(action, done) {
    //   if (action === 'confirm') {
    //     setTimeout(done, 1000);
    //   } else {
    //     done();
    //   }
    // },
    
    searchHistory(keywords) {
      this.$store.state.searchKeywords = keywords
    }
  },
}
</script>

<style lang="stylus" scoped>
.search-history
  .header
    margin-bottom 15px
    display flex
    justify-content space-between
    padding 0 20px
    .delete-all
      img
        width 18px
        height 18px
  .history-list
    height 60px
    background-color #fff
    span
      font-size 14px
      margin 0 auto
      height 20px
      line-height 20px
      background-color #ddd
      border-radius 10px
      padding 0 7px
      margin 0 8px
</style>