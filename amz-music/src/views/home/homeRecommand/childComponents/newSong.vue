<template>
  <div class="new-song">
    <div class="header">
      新歌推荐
    </div>
    <div class="new-song-item" v-for="(item, index) in newSong" :key="index">
      <div class="pic">
        <img :src="item.picUrl" alt="">
      </div>
      <div class="song-desc">
        <div class="name">{{item.name}}</div>
        <div class="artist">{{item.song.artists[0].name}}-{{item.song.album.company}}</div>
      </div>
      <div class="omit">
        <img src="~assets/img/home/omit.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSong',
  props:{
    newSong: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.new-song
  padding 10px
  width 100%
  .header
    margin-bottom 10px
  .new-song-item
    display flex
    height 60px
    margin 10px 0
    .pic
      width 60px
      height 60px
      img
        width 60px
        height 60px
        border-radius 5px
    .song-desc
      width 70%
      padding 0 10px
      .name
        color #000
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        padding-top 15px
      .artist
        font-size 10px
    .omit 
      padding-top 15px
      width 20px
      height 20px
      img 
        width 20px
        height 20px
</style>