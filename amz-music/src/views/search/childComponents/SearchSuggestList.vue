<template>
    <better-scroll class="content" v-if="searchKeywords !== ''">
    <div class="search-suggest-list" >
      <ul>
        <li class="item-name" v-for="(item, index) in searchList" :key="index" @click="getMusicId(item)">
          <img src="~assets/img/search/音乐.svg" >
          <span>{{item.name}}-{{item.artists[0].name}}</span>
        </li>
      </ul>
    </div>
    </better-scroll>
</template>

<script>
import BetterScroll from 'components/common/betterScroll/BetterScroll'
export default {
  name: 'SearchSuggestList',
  components: {
    BetterScroll
  },
  computed: {
    searchList() {
      return this.$store.state.searchList  
    },
    searchKeywords() {
      return this.$store.state.searchKeywords
    }
  },
  methods: {
    getMusicId(item) {
      this.$store.dispatch('getMusic', {
        id: item.id,
        name: item.name+ '-' +item.artists[0].name,
        artist: item.artists[0].name,
        pic: item.artists[0].img1v1Url
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.content
  margin 0 auto
  position fixed
  top 50px
  left 0
  right 0
  height 80%
  width 90%
  overflow hidden
  background-color #fff
  box-shadow 0px 0px 10px rgb(100, 100, 100)
  .search-suggest-list
    margin 0 auto
    background-color #fff
    ul
      .item-name
        padding 10px 10px 
        border 1px solid #eee
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        display flex
        align-items center
        span 
          margin-left 18px
</style>