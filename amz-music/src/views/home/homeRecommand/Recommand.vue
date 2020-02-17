<template>
  <div id="recommand">
    <func-bar>
      <func-item>
        <img slot="func-img" src="~assets/img/home/singer.svg" alt="">
        <span slot="func-title">歌手榜</span>
      </func-item>
      <func-item>
        <img slot="func-img" src="~assets/img/home/ranking.svg" alt="">
        <span slot="func-title">排行榜</span>
      </func-item>
      <func-item>
        <img slot="func-img" src="~assets/img/home/song-list.svg" alt="">
        <span slot="func-title">歌单</span>
      </func-item>
      <func-item>
        <img slot="func-img" src="~assets/img/home/more.svg" alt="">
        <span slot="func-title">更多</span>
      </func-item>
    </func-bar>
  </div>
</template>

<script>
import FuncBar from 'components/content/funcBar/FuncBar'
import FuncItem from 'components/content/funcBar/FuncItem'
export default {
  components: {
    FuncBar,
    FuncItem
  }
}
</script>

<style scoped>
#recommand {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>