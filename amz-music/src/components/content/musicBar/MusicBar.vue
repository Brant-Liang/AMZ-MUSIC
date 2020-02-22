<template>
  <div class="music-bar" @click="showAudio">
    <button>音乐</button>
  </div>
</template>

<script>
export default {
  name: 'MusicBar',
  methods: {
    showAudio() {
      this.$store.commit('showAudio')
    }
  },
}
</script>

<style>

</style>