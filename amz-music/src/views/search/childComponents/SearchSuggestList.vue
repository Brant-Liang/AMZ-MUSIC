<template>
    <better-scroll class="content" v-if="searchKeywords !== ''">
    <div class="search-suggest-list" >
      <ul>
        <li v-for="(item, index) in searchList" :key="index">
          {{item.name}}
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
  position fixed
  top 50px
  left 0
  right 0
  height 60%
  overflow hidden
  .search-suggest-list
    margin 0 auto
    background-color #fff

</style>