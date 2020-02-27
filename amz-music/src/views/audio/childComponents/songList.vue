<template>
  <div class="song-list">
    <div v-for="(item, index) in songList" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "song-list",
  computed: {
    ...mapState([
      'songList'
    ])
  },
};
</script>

<style>
</style>