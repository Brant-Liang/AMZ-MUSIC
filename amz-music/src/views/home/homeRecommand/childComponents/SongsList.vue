<template>
  <div class="songs-list">
    <div class="title">推荐歌单</div>
    <div class="desc">
      <span class="head">为你精挑细选</span>
      <span class="more">查看更多</span>
    </div>
    <div class="list">
      <div class="list-item" v-for="(item, index) in songsList" :key="index">
        <img :src="item.picUrl" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    songsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
.songs-list 
  padding 20px 10px
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
    overflow-x scroll
    width 100%
    .list-item
      display inline-block
      margin-right 5px
      width 110px
      img
        width 110px
        height 110px
        border-radius 5px
      span 
        font-size 14px
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
</style>