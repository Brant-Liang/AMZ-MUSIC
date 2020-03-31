<template>
  <div class="song-list">
    <div class="header">
      <div class="left">
        <div class="title">播放列表</div>
        <div class="nums">{{'('+$store.state.songList.length+')'}}</div>
      </div>
      <img src="../../../assets/img/search/delete.svg" alt="" @click="deleteAll">
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
      console.log(song);
      this.$store.dispatch('getMusic', song)
    },
    deleteAll() {
      this.$store.commit('deleteAllSong')
    }
  },
};
</script>

<style lang="stylus" scoped>
.song-list
  .header 
    margin 10px 20px
    display flex
    align-items center
    justify-content space-between
    .left
      display flex
      align-items center
      .title
        color #000
        font-size 20px
    .nums
      font-size 16px
      height 16px
      line-height 16px
  .song-item
    display flex
    padding 10px 20px
    border-bottom 1px solid #ccc
  .active
    color red
</style>