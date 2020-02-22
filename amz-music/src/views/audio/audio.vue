<template>
  <div class="audio" v-show="isShowAudio">
    <div class="header">
      <div class="back" @click="backToHome">
        <img src="~/assets/img/common/back.png" alt="">
      </div>
      <div class="music-desc">
        <div class="name">就是爱你</div>
        <div class="artist">陶喆</div>
      </div>
      <div class="share">分享</div>
    </div>
    <div class="controlBar">
      <div>上一首</div>
      <div @click="play">播放</div>
      <div @click="pause">暂停</div>
      <div>下一首</div>
    </div>
    <audio src="http://m7.music.126.net/20200223000244/639ae133a7a87963a8ea33465d4704f3/ymusic/5153/070e/515a/f9b009e30e0df99f7af3f0ccce78859f.mp3"
           autoplay
           ref="Audio"></audio>
           
  </div>
  
</template>

<script>
export default {
  name: 'Audio',
  computed: {
    isShowAudio() {
      return this.$store.state.isShowAudio
    }
  },
  methods: {
    backToHome() {
      this.$store.commit('backToHome')
    },
    play() {
      this.$refs.Audio.play()
    },
    pause() {
      this.$refs.Audio.pause()
    }
  },
}
</script>

<style lang="stylus" scoped>
.audio 
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color #aaa
  .header
    display flex
    justify-content space-between
    .back
      img
        height 25px
        width 25px
</style>