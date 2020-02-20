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
import { getSuggest } from 'network/search'
export default {
  name: 'SearchHeader',
  data() {
    return {
      keywords: ''
    }
  },
  computed: {
    getTheWord() {
      return this.$store.state.searchKeywords
    }
  },
  watch: {
    keywords(newVal) {
      console.log(this.keywords);
      if(newVal !== '') {
        getSuggest(this.keywords).then(res => {
          console.log(res);
        })
      }
    }
  },
  methods: {
    backToHome() {
      this.$store.commit('backToHome')
    },
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