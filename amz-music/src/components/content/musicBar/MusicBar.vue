<template>
  <div class="music-bar" @click="showAudio">
    <div>
      <img :src="songPic" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicBar',
  data() {
    return {
    }
  },
  computed: {
    songPic() {
      return this.$store.state.songDesc.pic
    }
  },
  methods: {
    showAudio() {
      this.$store.commit('showAudio')
    }
  },
}
</script>

<style lang="stylus" scoped>
.music-bar
  display flex
  align-items center
  img 
    border-radius 50%
    width 53px
    height 53px

</style>