<template>
  <div class="song-list">
    <div class="header">
      <div class="title">播放列表</div>
    </div>
    <div class="song-item" v-for="(item, index) in songList" :key="index">
      <div class="name">{{item.name}} - </div>
      <div class="artist">{{item.artist}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "song-list",
  computed: {
    ...mapState([
      'songList'
    ])
  },
};
</script>

<style lang="stylus" scoped>
.song-list
  .song-item
    display flex
</style>