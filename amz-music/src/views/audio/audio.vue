<template>
  <div ref="audioPage" class="audio" v-show="isShowAudio" >
    <div class="audioContent">
      <audio-header :songDesc="songDesc" />
      <div class="songPic" v-show="isShowPic" @click="showLysic">
        <div class="dist" ref="dist">
          <img :src="songDesc.pic">
        </div>
      </div>
      <b-scroll class="content" ref="scroll" v-show="!isShowPic">
       <div class="lyric" @click="showPic">
         <div ref="lineLyric" class="lyric-line" v-for="(item, index) in songLyric" :key="index">
            <p class="line" :class="{active: currentIndex === index}">
              <span class="all-lyric">{{item.lyric}}</span> 
              <span ref="activeLyric" class="active-lyric" v-show="currentIndex === index">{{item.lyric}}</span>
            </p>
         </div>
        </div>
      </b-scroll>
      <progress-bar v-if="isShowAudio" :Audio="$refs.Audio" :curTime="curTime" :duration="duration"/>
      <div class="controlBar">
        <div class="play-way" @click="switchPlayWay">
          <img v-if="playWays === 2" src="~assets/img/audio/liebiaoxunhuan.svg" alt />
          <img v-if="playWays === 0" src="../../assets/img/audio/danquxunhuan.svg" alt="">
          <img v-if="playWays === 1" src="../../assets/img/audio/suijibofang.svg" alt="">
        </div>
        <div class="last" @click="playLastSong">
          <img src="~assets/img/audio/next.svg" alt />
        </div>
        <div class="play" @click="audioClick" ref="audioBtn">
          <img v-if="playStatus" src="~assets/img/audio/play.svg" alt />
          <img v-else src="~assets/img/audio/pause.svg" alt />
        </div>
        <div class="next" @click="playNextSong">
          <img src="~assets/img/audio/next.svg" alt />
        </div>
        <div class="play-list" @click="songList">
          <img src="~assets/img/audio/list.svg" alt />
        </div>
      </div>
      <van-popup
        round
        v-model="showSongList"
        position="bottom"
        :style="{ height: '50%'}"
      >
        <song-list/>
      </van-popup>
      <audio :src="songDesc.currentMusic"
            
            ref="Audio"
      >
      </audio>
    </div>
    <audio-mask />
  </div>
</template>

<script>
import AudioHeader from './childComponents/audioHeader'
import BScroll from 'components/common/betterScroll/BetterScroll'
import ProgressBar from './childComponents/progress'
import SongList from './childComponents/songList'
import AudioMask from './childComponents/mask'
import Vue from 'vue';
import { requestAnimationFrame, cancelAnimationFrame } from 'raf-plus'
import { Popup } from 'vant';

Vue.use(Popup);
import { mapState } from 'vuex'
export default {
  name: 'Audio',
  data() {
    return {
      currentIndex: 0,
      playStatus: false,
      isShowPic: false,
      timer: null,
      startR: 5,
      x: 0.05,
      duration: 0,
      showSongList: false,
      lyricWidth: 0,
      lyricMoveTimer: null,
      lyricRate: null
    }
  }, 
  components: {
    AudioHeader,
    BScroll,
    ProgressBar,
    SongList,
    AudioMask
  },
  mounted() {
    this.audioHandle()
  },
  watch: {
    currentMusic() {
      this.audioHandle()
    }
  },
  computed: {
    ...mapState([
      'isShowAudio',
      'songDesc',
      'curTime',
      'playWays'
    ]),
    currentMusic() {
      return this.$store.state.songDesc.currentMusic
    },
    songLyric() {
      return this.$store.getters.splitLyric
    },
  },
  methods: {
    showPic() {
      this.isShowPic = true
    },
    showLysic() {
      this.isShowPic = false
    },
    distAnimation() {
      const { dist, Audio } = this.$refs
      if(!this.playStatus && Audio.src){
        dist.style.transform = "rotate(" + this.startR + "deg)"
        this.startR += 0.22
        this.timer =  requestAnimationFrame(this.distAnimation)
      }
    },
    switchPlayWay() {
      this.$store.commit('playWay')
    },
    audioPlay() {
      let { Audio } = this.$refs
      if(Audio.src !== ''){
        Audio.play()
        this.duration = Audio.duration
        this.lyricPlay()
        this.lyricMovePlay(this.lyricRate * 1000)
        this.playStatus = false
        this.distAnimation()
      }
    },
    pause() {
      this.$refs.Audio.pause()
      this.playStatus = true
      clearInterval(this.lyricTimer)
      clearInterval(this.lyricMoveTimer)
    },
    playLastSong() {
      cancelAnimationFrame(this.timer)
      this.$store.commit('lastSong', this.$store.getters.curSongIndex)
    },
    playNextSong() {
      cancelAnimationFrame(this.timer)
      if(this.playWays === 1){
        this.$store.commit('randomPlay')
      }
      else {
        this.$store.commit('nextSong', this.$store.getters.curSongIndex)
      }
    },
    randomPlay() {
      cancelAnimationFrame(this.timer)
      this.$store.commit('randomPlay')
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
      clearInterval(this.lyricTimer)
      clearInterval(this.lyricMoveTimer)
      // 单曲循环
      if(this.playWays === 0)
        this.$store.commit('getCurrentTime', 0)
        this.audioPlay()
      // 顺序播放
      if(this.playWays === 2)
        this.playNextSong()
        this.audioPlay()
      // 随机播放
      if(this.playWays === 1)
        this.randomPlay()
    },
    lyricPlay() {
      let { Audio, scroll} = this.$refs
      if(!Audio || !scroll) return;
      this.lyricTimer = setInterval(() => {
        this.$store.commit('getCurrentTime', Audio.currentTime)
        if(Audio.currentTime >= Audio.duration) {
          this.audioEnd()
          return
        }
        // 歌词滚动及相对应时间
        if(!this.songLyric || !scroll) return;
        let n;
        this.songLyric.find((item, index) => {
          let {minute, second} = item
          if(minute*60 + second === Math.round(Audio.currentTime)) {
            n = index
            this.lyricRate = this.songLyric[index + 1].minute*60 + this.songLyric[index + 1].second - (minute*60 + second);
            this.lyricWidth = 0;
            clearInterval(this.lyricMoveTimer)
            this.lyricMovePlay(this.lyricRate * 1000)
            return true
          }
          return false
        })
        // 前5行不滚动
        if(n && n !== this.currentIndex) {
          this.currentIndex = n
          if(this.currentIndex > 4) {
            let lineEl = this.$refs.lineLyric[this.currentIndex - 4]
            this.$refs.scroll.scrollToElement(lineEl ,300)
          }
        }
      }, 1000)
    },
    lyricMovePlay(sec) {
        this.lyricMoveTimer = setInterval(() => {
          this.lyricWidth += (100/(sec/20).toFixed(2)) //100 / (second / 20)
          this.$refs.activeLyric[this.currentIndex].style.width = this.lyricWidth + '%';
          if(this.lyricWidth >= 100) {
            this.$refs.activeLyric[this.currentIndex].style.width = 0;
          }
        }, 20);
    },
    songList() {
      this.showSongList = true
    },
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
        margin 0 auto
        .lyric-line
          .line
            padding 8px 0px
            display inline-block
          .active
            display inline-block
            font-size 19px
            transition all .4s ease
            position relative
            .active-lyric
              color red
              position absolute
              left 0
              width 0
              overflow hidden
              white-space nowrap
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