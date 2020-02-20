<template>
  <div class="new-song">
    <div class="header">
      新歌推荐
    </div>
    <div class="new-song-item" v-for="(item, index) in newSong" :key="index">
      <div class="pic">
        <img :src="item.picUrl" alt="">
      </div>
      <div class="name">{{item.name}}</div>
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
  .new-song-item
    img
      width 75px
      height 75px
</style>