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
    <div class="hot-search">
      <div class="header">热搜歌曲</div>
      <better-scroll class="content" :probeType="3">
        <ul class="hot-list">
          <li v-for="(item, index) in hotList" :key="index">
            <div class="rank">{{index + 1}}</div>
            <div class="item-data">
              <div class="item-header">
                <div class="name-icon">
                  <div class="name">{{item.searchWord}}</div>
                  <div class="hot-icon" v-if="item.iconType !== 0">
                    <img :src="item.iconUrl" alt="">
                  </div>
                </div>
              <span class="score">{{item.score}}</span>
              </div>
              <div class="desc">{{item.content}}</div>
            </div>
          </li>
        </ul>
      </better-scroll>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'components/common/betterScroll/BetterScroll'
import { getHotSearch } from 'network/search'
export default {
  name: "Search",
  components: {
    BetterScroll
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
  .hot-search
    .content
      height calc(100vh - 100px)
      overflow hidden
      li
        display flex
        margin-bottom 16px
        .rank
          text-align center
          line-height 16px
          height 16px
          width 20px
          margin 5px 0 0 10px
          font-family 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
        &:nth-child(1)
          .rank 
            color red
        &:nth-child(2)
          .rank 
            color orange
        &:nth-child(3)
          .rank 
            color #FEC200
        .item-data
          flex 1
          padding 0 14px
          .item-header
            display flex
            align-items center
            justify-content space-between
            margin 0 auto
            .name-icon
              display flex
              align-items center
              justify-content flex-start
              .name
                line-height 16px
                height 16px
                color #000
              img 
                height 16px
                padding-left 5px
            .score
              font-family Arial, Helvetica, sans-serif
              font-size 12px
              color #dcdcdc
          .desc
            font-size 12px
            line-height 14px
            padding-top 5px
</style>