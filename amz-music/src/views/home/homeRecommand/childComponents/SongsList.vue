<template>
  <div class="songs-list">
    <div class="title">推荐歌单</div>
    <div class="desc">
      <span class="head">为你精挑细选</span>
      <span class="more">查看更多</span>
    </div>
    <better-scroll :scrollY="false" :scrollX="true">
      <div class="list">
        <div class="list-item" v-for="(item, index) in songsList" :key="index">
          <div class="pic">
            <img :src="item.picUrl">
          </div>
          <div class="play-count">
            <img src="~assets/img/home/play.svg" alt="">
            <span>{{item.playCount | playCountFilter}}</span>
          </div>
          <span class="name">{{item.name}}</span>
        </div>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from 'components/common/betterScroll/BetterScroll'
export default {
  components: {
    BetterScroll
  },
  props: {
    songsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    playCountFilter(value) {
      if(value < 10000) return value
      if(value >= 10000 && value < 100000000) 
        return Math.round(value / 10000) + '万'
      if(value >= 100000000)
        return Math.round(value / 100000000).toFixed(1) + '亿'
    }
  }
}
</script>

<style lang="stylus" scoped>
.songs-list 
  padding 0 10px
  box-sizing border-box
  width 100%
  overflow hidden
  .title
    font-size 14px
  .desc
    color #111
    display flex
    justify-content space-between
    .head
      font-size 18px
    .more
      width 80px
      text-align center
      font-size 14px
      border 1px solid #aaa
      line-height 20px
      border-radius 10px
  .list
    padding 10px 0
    display flex
    width 650px
    overflow hidden
    .list-item
      position relative
      display inline-block
      margin-right 10px
      width 100px
      .pic
        img
          width 100px
          height 100px
          border-radius 5px
      .play-count
        position absolute
        display flex
        top -2px
        right 5px
        font-family Arial, "Helvetica Neue", Helvetica, sans-serif
        color #fefefe
        img
          width 18px
          height 18px
        span
          line-height 18px
          height 18px
          font-size 10px
      .name
        font-size 14px
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
</style>