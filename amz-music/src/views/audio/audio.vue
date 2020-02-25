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
      <div class="dist" ref="dist">
        <img :src="songDesc.pic">
      </div>
    </div>
    <b-scroll class="content" ref="scroll" v-else>
      <div class="lyric" @click="showPic">
        <p class="line" ref="lineLyric" :class="{active: currentIndex === index}" v-for="(item, index) in songLyric" :key="index">
          {{item.lyric}}
        </p>
      </div>
    </b-scroll>
    <div class="progress-bar">
      <div class="currentTime">{{curTime}}</div>
      <div class="progress-line">
        <div class="played-line" ref="playedLine"></div>
        <div class="controlBtn" ref="controlBtn"></div>
      </div>
      <div class="duration">{{duration}}</div>
    </div>
    <div class="controlBar">
      <div class="play-way">
        <img src="~assets/img/audio/liebiaoxunhuan.svg" alt="">
      </div>
      <div class="last">
        <img src="~assets/img/audio/next.svg" alt="">
      </div>
      <div class="play" @click="audioClick" ref="audioBtn">
        <img v-if="playStatus" src="~assets/img/audio/play.svg" alt="">
        <img v-else src="~assets/img/audio/pause.svg" alt="">
      </div>
      <div class="next">
        <img src="~assets/img/audio/next.svg" alt="">
      </div>
      <div class="play-list">
        <img src="~assets/img/audio/list.svg" alt="">
      </div>
    </div>
    <audio :src="currentMusic"
           loop
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
      isShowPic: false,
      startR: 5,
      x: 0.05,
      curTime: '0:00',
      duration: '0:00'
    }
  },
  mounted() {
    this.audioHandle()
  },
  updated(){
    if(this.$refs.dist)
      this.animation()
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
    audioPlay() {
      let {Audio} = this.$refs
      console.log(Audio.src);
      if(Audio.src !== ''){
        Audio.play()
        if(Audio.duration % 60 < 10)
          this.duration = Math.floor(Audio.duration/ 60) + ':' + '0'+ parseInt(Audio.duration % 60)
        else
          this.duration = Math.floor(Audio.duration/ 60) + ':' + parseInt(Audio.duration % 60)
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
        return
      }
      this.pause()
    },
    audioHandle() {
      let play = () => {
        this.audioPlay()
        document.removeEventListener("touchstart", play)
      }
      play()
      document.addEventListener("touchstart", play)
    },
    audioEnd() {
      this.currentIndex = 0
      this.$refs.scroll.scrollTo(0, 0)
    },
    animation() {
      const { dist } = this.$refs
      if(!this.playStatus){
        dist.style.transform = "rotate(" + this.startR + "deg)"
        this.startR += 0.2
        window.requestAnimationFrame(this.animation)
      }
    },
    lyricPlay() {
      let { Audio, scroll } = this.$refs
      if(!Audio || !scroll) return
      clearInterval(this.lyricTimer)
      this.lyricTimer = setInterval(() => {
        let duration = Audio.duration
        let currentTime = Audio.currentTime
        if(currentTime % 60 < 10)
          this.curTime = Math.floor(currentTime / 60) + ':' +'0'+ parseInt(currentTime % 60)
        else
          this.curTime = Math.floor(currentTime / 60) + ':' + parseInt(currentTime % 60)
        if(currentTime >= duration) {
          this.audioEnd()
          return
        }
        // 歌词滚动及相对应时间
        //console.log(this.songLyric);
        if(!this.songLyric || !this.$refs.scroll) return
        let n
        this.songLyric.find((item, index) => {
          let {minute, second} = item
          if(minute*60 + second === Math.round(currentTime)) {
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
      padding-top 30%
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
    .progress-bar
      display flex
      justify-content space-between
      align-items center
      font-size 14px
      color #fefefe
      padding 0 18px
      .progress-line
        width 70%
        height 2px
        background-color #aaa
        .played-line
          color #fff
        .controlBtn
          width 10px
          height 10px
          background-color #fefefe
          border-radius 50%
          transform translateY(-4px)
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
      background-color rgba(0,0,0, .7)
      
</style>