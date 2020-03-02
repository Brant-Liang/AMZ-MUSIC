<template>
  <div class="song-list">
    <div class="header">
      <div class="title">播放列表</div>
    </div>
    <div class="song-item" :class="{active: item.id === songDesc.id}" v-for="(item, index) in songList" :key="index" @click="playThisSong(item)">
      <div class="name">{{item.name}}-</div>
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
      'songDesc',
      'songList'
    ])
  },
  methods: {
    playThisSong(song) {
      this.$store.dispatch('getMusic', song)
    }
  },
};
</script>

<style lang="stylus" scoped>
.song-list
  .song-item
    display flex
    padding 10px 20px
    border-bottom 1px solid #ccc
  .active
    color red
</style>