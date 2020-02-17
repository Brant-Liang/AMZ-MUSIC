<template>
  <div class="songs-list">
    歌单
  </div>
</template>

<script>
import { getSongList } from 'network/recommand.js'
export default {
  data() {
    return {
      songList: [],
      limit: 6
    }
  },
  created() {
    // 获取歌单数据
    getSongList(this.limit).then(res => {
      if(res.code === 200) {
        console.log(res);
        this.songList = res.result
      }
    })
  },
}
</script>

<style>

</style>