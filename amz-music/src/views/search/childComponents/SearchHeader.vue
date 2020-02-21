<template>
  <div class="header">
    <div @click="backToHome" class="back" >
      <img src="~assets/img/search/back.png" alt />
    </div>
    <div class="search-input">
      <input v-model.trim="keywords" type="text" />
    </div>
    <span>搜索</span>
  </div>
</template>

<script>

export default {
  name: 'SearchHeader',
  data() {
    return {
      limit: 30,
      offset: 0,
      type: 1,
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
    }
  },
  watch: {
    keywords(newVal) {
      console.log(this.keywords);
      if(newVal !== '') {
        this.$store.dispatch('searchListData', {
          keywords: this.keywords,
          limit: this.limit,
          offset: this.offset,
          type: this.type
        })
      }
    }
  },
  methods: {
    backToHome() {
      this.$store.commit('backToHome')
    }
  }
};
</script>

<style lang="stylus" scoped>
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