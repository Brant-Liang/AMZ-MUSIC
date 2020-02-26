<template>
  <div class="progress-bar">
    <div class="currentTime">{{showCurTime}}</div>
    <van-slider v-model="proportion" 
                bar-height="2px"
                active-color="#ee0a24"
                button-size="10px"
                :style="{ width: '70%' }" 
                @change="onChange" />
    <div class="duration">{{showDuration}}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Slider } from 'vant';

Vue.use(Slider);
export default {
  props: {
    duration: {
      type: Number,
      default: 0
    },
    Audio: {
      type: HTMLAudioElement
    }
  },
  computed: {
    curTime() {
      return this.$store.state.currentTime
    },
    proportion: {
      get() {
        return (this.curTime / this.duration) * 100
      },
      set(val) {
        if(val){
          this.Audio.currentTime = (val / 100) * this.duration
          this.Audio.play() 
          this.$store.commit('getCurrentTime', (val / 100) * this.duration)
        }
      }
    },
    showCurTime() {
      let showCurTime
      if(this.curTime % 60 < 10)
        showCurTime ="0" + Math.floor(this.curTime / 60) + ':' +'0'+ parseInt(this.curTime % 60)
      else
        showCurTime ="0" + Math.floor(this.curTime / 60) + ':' + parseInt(this.curTime % 60)
      return showCurTime
    },
    showDuration() {
      let showDuration
      if(this.duration % 60 < 10)
        showDuration ="0" + Math.floor(this.duration/ 60) + ':' + '0'+ parseInt(this.duration %  60)
      else
        showDuration ="0" + Math.floor(this.duration/ 60) + ':' + parseInt(this.duration % 60)
      return showDuration
   }
  },
  methods: {
    onChange() {
      
    }
  },
}
</script>

<style lang="stylus" scoped>
.progress-bar
  display flex
  justify-content space-between
  align-items center
  font-size 14px
  color #fefefe
  padding 0 18px
  position absolute
  bottom 80px
  width 100%
  .progress-line
    width 238px
    height 2px
    background-color #aaa
    .played-line
      color #fff
    .controlBtn
      width 10px
      height 10px
      background-color #fefefe
      border-radius 50%
      position relative
      top -4px
</style>