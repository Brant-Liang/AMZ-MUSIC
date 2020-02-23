<template>
  <div class="audio" v-show="isShowAudio" >
    <div class="header">
      <div class="back" @click="backToHome">
        <img src="~/assets/img/common/back.png" alt="">
      </div>
      <div class="music-desc">
        <div class="name">{{songDesc.name}}</div>
        <div class="artist">{{songDesc.artist}}</div>
      </div>
      <div class="share">分享</div>
    </div>
    <div class="songPic">
      <img :src="songDesc.pic" alt="">
    </div>
    <b-scroll class="content">
      <div class="lyric">
        <div class="line" v-for="(item, index) in songLyric" :key="index">
          {{item}}
        </div>
      </div>
    </b-scroll>
    <div class="controlBar">
      <div @click="getDuration">上一首</div>
      <div @click="play">播放</div>
      <div @click="pause">暂停</div>
      <div>下一首</div>
    </div>
    <audio :src="currentMusic"
           autoplay
           loop
           ref="Audio"></audio>
           
  </div>
  
</template>

<script>
import BScroll from 'components/common/betterScroll/BetterScroll'
export default {
  name: 'Audio',
  components: {
    BScroll
  },
  computed: {
    isShowAudio() {
      return this.$store.state.isShowAudio
    },
    currentMusic() {
      return this.$store.state.currentMusic
    },
    songDesc() {
      return this.$store.state.songDesc
    },
    songLyric() {
      return this.$store.getters.splitLyric
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
    },
    getDuration() {
      console.log(this.$refs.Audio.duration);
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
  background-image url('https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg')
  background-repeat repeat-y
  .header
    display flex
    justify-content space-between
    .back
      img
        height 25px
        width 25px
    .music-desc
      text-align center
      .name
        color #fff
        font-size 22px
        margin-bottom 5px
      .artist
        color #ddd
        font-size 14px
  .songPic
    display flex
    justify-content center
    align-items center
    height 270px
    img 
      width 180px
      height 180px
      border-radius 50%
  .content
    height 50%
    overflow hidden
    text-align center
    .lyric
      .line
        padding 5px 0px
  .controlBar
    display flex
    justify-content space-around
    height 50px
</style>