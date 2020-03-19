<template>
  <div class="header">
    <div @click="backToHome" class="back" >
      <img src="~assets/img/search/back.png" />
    </div>
    <div class="search-input">
      <input v-model.trim="keywords" type="text" />
      <img @click="clear" src="~assets/img/common/cha.png" />
    </div>
    <span>搜索</span>
  </div>
</template>

<script>
import { debounce } from 'common/utils'
import { getSuggest } from 'network/search'
export default {
  name: 'SearchHeader',
  data() {
    return {
      limit: 30,
      offset: 0,
      type: 1
    }
  },
  computed: {
    keywords: {
      get() {
        return this.$store.state.searchKeywords
      },
      set(val) {
        this.$store.state.searchKeywords = val
      }
    },
    searchList: {
      get() {
        return this.$store.state.searchList
      },
      set(val) {
        this.$store.state.searchList = val
      }
    }
  },
  watch: {
    keywords: debounce(function(newVal) {
      console.log(this.keywords);
      if(newVal !== '') {
        getSuggest(this.keywords, this.limit, this.offset, this.type).then(res => {
        console.log(res.result);
        this.searchList = res.result.songs
      })
      }
    }, 500)
  },
  methods: {
    backToHome() {
      this.$store.commit('backToHome')
    },
    clear() {
      this.keywords = ''
    }
  }
};
</script>

<style lang="stylus" scoped>
.header 
  padding 0 15px
  display: flex;
  height 50px
  align-items center
  justify-content space-between
  .back
    img 
      width 16px
      height 16px 
  .search-input 
    width: 74%;
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
    img
      height 12px
      width 12px
  span
    color: #111
    line-height: 24px
</style>