<template>
  <div class="header">
    <div class="back" @click="backToHome">
      <img src="~/assets/img/common/back.png" alt />
    </div>
    <div class="music-desc">
      <div class="name">{{songDesc.name}}</div>
      <div class="artist">{{songDesc.artist}}</div>
    </div>
    <div class="share">
      <img src="~assets/img/audio/分享.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songDesc: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    backToHome() {
      this.$store.commit('backToHome')
    },
  },
};
</script>

<style lang="stylus" scoped>
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
  .share
    img 
      width 20px
      height 20px
</style>