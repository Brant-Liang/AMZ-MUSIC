<template>
  <div class="search-history">
    <div class="header">
      <span>
        搜索历史
      </span>
      <div class="delete-all" @click="deleteAll">
        <img src="~assets/img/search/delete.svg" alt="">
      </div>
    </div>
    <div class="history-list">
      <span v-for="(item, index) in SearchList" :key="index">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  computed: {
    SearchList() {
      return this.$store.state.searchHistory
    }
  },
  methods: {
    deleteAll() {
      this.$store.commit('deleteAll')  
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