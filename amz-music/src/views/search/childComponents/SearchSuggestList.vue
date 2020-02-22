<template>
    <better-scroll class="content" v-if="searchKeywords !== ''">
    <div class="search-suggest-list" >
      <ul>
        <li class="item-name" v-for="(item, index) in searchList" :key="index">
          {{item.name}}-{{item.artists[0].name}}
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
</style>