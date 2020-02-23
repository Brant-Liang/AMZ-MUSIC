<template>
  <div class="hot-search">
    <div class="header">热搜歌曲</div>
    <better-scroll class="content" :probeType="3">
      <ul class="hot-list">
        <li v-for="(item, index) in hotList" :key="index" @click="searchTheWord(index)">
          <div class="rank">{{index + 1}}</div>
          <div class="item-data">
            <div class="item-header">
              <div class="name-icon">
                <div class="name">{{item.searchWord}}</div>
                <div class="hot-icon" v-if="item.iconType !== 0">
                  <img :src="item.iconUrl" alt />
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
</template>

<script>
import BetterScroll from "components/common/betterScroll/BetterScroll";
export default {
  props: {
    hotList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    BetterScroll
  },
  methods: {
    searchTheWord(index) {
      this.$store.commit('inputTheWord', this.hotList[index].searchWord)
    }
  },
};
</script>

<style lang="stylus" scoped>
.hot-search
  .content
    height calc(100vh - 163px)
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