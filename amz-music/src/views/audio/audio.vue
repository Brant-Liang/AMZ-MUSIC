<template>
  <div ref="audioPage" class="audio" v-show="isShowAudio" >
    <div class="audioContent">
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
    <div class="songPic" v-if="isShowPic" @click="showLysic">
      <img :src="songDesc.pic">
    </div>
    <b-scroll class="content" v-else>
      <div class="lyric" @click="showPic">
        <div class="line" :class="{active: currentIndex === index}" v-for="(item, index) in songLyric" :key="index">
          {{item.lyric}}
        </div>
      </div>
    </b-scroll>
    <div class="controlBar">
      <div @click="getDuration">上一首</div>
      <div class="play" @click="audioClick" ref="audioBtn">
        <img v-if="playStatus" src="~assets/img/audio/play.png" alt="">
        <img v-else src="~assets/img/audio/pause.png" alt="">
      </div>
      <div>下一首</div>
    </div>
    <audio :src="currentMusic"
           loop
           autoplay
           ref="Audio"></audio>
    </div>
    <div class="mask" :style="{backgroundImage: 'url('+ songDesc.pic +')'} "></div>       
  </div>
  
</template>

<script>
import BScroll from 'components/common/betterScroll/BetterScroll'
export default {
  name: 'Audio',
  data() {
    return {
      currentIndex: 0,
      playStatus: false,
      isShowPic: false
    }
  },
  mounted() {
    this.audioHandle()
  },
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
    showPic() {
      this.isShowPic = true
    },
    showLysic() {
      this.isShowPic = false
    },
    audioPlay() {
      let {Audio} = this.$refs
      if(Audio.src !== undefined){
        Audio.play()
      }
      this.playStatus = false
    },
    pause() {
      this.$refs.Audio.pause()
      this.playStatus = true
    },
    // 播放暂停按钮
    audioClick() {
      if(this.$refs.Audio.paused) {
        this.audioPlay()
        return
      }
      this.pause()
    },
    audioHandle() {
      let play = () => {
        this.audioPlay()
        this.$refs.audioPage.removeEventListener("touchstart", play)
      }
      play()
      this.$refs.audioPage.addEventListener("touchstart", play)
    },
    getDuration() {
      console.log(this.$refs.Audio.duration);
    }
  },
}
</script>

<style lang="stylus" scoped>
.audio
  .audioContent
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 21
    .header
      display flex
      justify-content space-between
      padding 10px 15px 0
      box-sizing border-box
      align-items center
      .back
        img
          height 20px
          width 20px
      .music-desc
        text-align center
        .name
          color #fff
          font-size 19px
          margin-bottom 5px
        .artist
          color #ddd
          font-size 14px
    .songPic
      display flex
      justify-content center
      align-items center
      height 275px
      width 275px
      background url('~assets/img/common/disc.png') no-repeat
      background-size contain
      position relative
      left 50%
      top 20%
      transform translate(-50%)
      img 
        width 168px
        height 168px
        border-radius 50%
    .content
      margin-top 60px
      margin-bottom 50px
      height 60%
      overflow hidden
      text-align center
      .lyric
        color #bbb
        width 80%
        margin 0 auto
        .line
          padding 5px 0px
        .active
          color #fff
    .controlBar
      display flex
      justify-content space-around
      height 80px
      position: fixed;
      bottom: 0px;
      left: 0;
      right: 0;
      .play
        width 35px
        height 35px
        border-radius 50%
        display flex
        align-items center
        justify-content center
        background-color #aaa
        opacity 0.5
        img
          width 25px
          height 25px
  .mask
    position fixed
    top 0
    left 0
    right 0
    height 100%
    z-index 1
    background-repeat no-repeat
    background-position 50%
    background-size auto 100%
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform scale(1.2)
    filter blur(12px)
    &:before
      content ""
      position fixed
      left 0
      right 0
      bottom 0
      top 0
      background-color rgba(0,0,0, .7
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      )
      
</style>