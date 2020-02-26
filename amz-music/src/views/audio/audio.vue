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
    <div class="songPic" v-show="isShowPic" @click="showLysic">
      <div class="dist" ref="dist">
        <img :src="songDesc.pic">
      </div>
    </div>
    <b-scroll class="content" ref="scroll" v-show="!isShowPic">
      <div class="lyric" @click="showPic">
        <p class="line" ref="lineLyric" :class="{active: currentIndex === index}" v-for="(item, index) in songLyric" :key="index">
          {{item.lyric}}
        </p>
      </div>
    </b-scroll>
    <progress-bar v-if="isShowAudio" :Audio="$refs.Audio" :curTime="curTime" :duration="duration"/>
    <div class="controlBar">
      <div class="play-way">
        <img src="~assets/img/audio/liebiaoxunhuan.svg" alt />
      </div>
      <div class="last">
        <img src="~assets/img/audio/next.svg" alt />
      </div>
      <div class="play" @click="audioClick" ref="audioBtn">
        <img v-if="playStatus" src="~assets/img/audio/play.svg" alt />
        <img v-else src="~assets/img/audio/pause.svg" alt />
      </div>
      <div class="next">
        <img src="~assets/img/audio/next.svg" alt />
      </div>
      <div class="play-list">
        <img src="~assets/img/audio/list.svg" alt />
      </div>
    </div>
    <audio :src="currentMusic"
           loop
           ref="Audio"
    >
    </audio>
    </div>
    <audio-mask />
  </div>
</template>

<script>
import BScroll from 'components/common/betterScroll/BetterScroll'
import ProgressBar from './childComponents/progress'
import AudioMask from './childComponents/mask'
export default {
  name: 'Audio',
  data() {
    return {
      currentIndex: 0,
      playStatus: false,
      isShowPic: false,
      startR: 5,
      x: 0.05,
      duration: 0
    }
  }, 
  components: {
    BScroll,
    ProgressBar,
    AudioMask
  },
  mounted() {
    this.audioHandle()
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
    curTime() {
      return this.$store.state.currentTime
    },
    songLyric() {
      return this.$store.getters.splitLyric
    },
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
    distAnimation() {
      const { dist } = this.$refs
      if(!this.playStatus){
        dist.style.transform = "rotate(" + this.startR + "deg)"
        this.startR += 0.22
        window.requestAnimationFrame(this.distAnimation)
      }
    },
    audioPlay() {
      let {Audio} = this.$refs
      if(Audio.src !== ''){
        Audio.play()
        this.duration = Audio.duration
        this.lyricPlay()
      }
      console.log(this.songLyric);
      this.playStatus = false
    },
    pause() {
      this.$refs.Audio.pause()
      this.playStatus = true
      clearInterval(this.lyricTimer)
    },
    // 播放暂停按钮
    audioClick() {
      if(this.$refs.Audio.paused) {
        this.audioPlay()
        this.distAnimation()
        return
      }
      this.pause()
    },
    audioHandle() {
      let play = () => {
        this.audioPlay()
        this.distAnimation()
        document.removeEventListener("touchstart", play)
      }
      play()
      document.addEventListener("touchstart", play)
    },
    audioEnd() {
      this.currentIndex = 0
      this.$refs.scroll.scrollTo(0, 0)
      clearInterval(this.lyricTimer)
    },
    lyricPlay() {
      let { Audio, scroll } = this.$refs
      if(!Audio || !scroll) return;
      this.lyricTimer = setInterval(() => {
        this.$store.commit('getCurrentTime', Audio.currentTime)
        if(Audio.currentTime >= Audio.duration) {
          this.audioEnd()
          return
        }
        // 歌词滚动及相对应时间
        //console.log(this.songLyric);
        if(!this.songLyric || !this.$refs.scroll) return;
        let n;
        this.songLyric.find((item, index) => {
          let {minute, second} = item
          if(minute*60 + second === Math.round(Audio.currentTime)) {
            n = index
            return true
          }
          return false
        })
        if(n && n !== this.currentIndex) {
          this.currentIndex = n
          if(this.currentIndex > 4) {
            let lineEl = this.$refs.lineLyric[this.currentIndex - 4]
            this.$refs.scroll.scrollToElement(lineEl ,300)
          }
        }
      }, 1000)
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
      padding 30% 0
      .dist
        margin 0 auto
        height 275px
        width 275px
        background url('~assets/img/common/disc.png') no-repeat
        background-size contain
        display flex
        justify-content center
        align-items center
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
          padding 8px 0px
        .active
          color #fff
          font-size 19px
          transition all .4s ease
  .controlBar
    display flex
    justify-content space-around
    height 80px
    width 100%
    position fixed
    align-items center
    bottom 0px
    left 0
    right 0
    .play-way
      width 20%
      text-align center
      img
        width 16px
        height 16px
    .last
      width 20%
      text-align center
      img
        transform rotate(180deg)
    .play
      width 20%
      border-radius 50%
      text-align center
      img
        width 25px
        height 25px
    .next
      width 20%
      height 20px
      font-size 0
      text-align center
    .play-list
      width 20%
      text-align center
      img 
        width 20px
        height 20px
</style>