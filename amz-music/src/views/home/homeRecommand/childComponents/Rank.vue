<template>
  <div id="rank" v-show="isShowRank">
    <p>云音乐新歌榜</p>
    <p>云音乐热歌榜</p>
    <p>网易原创歌曲榜</p>
    <p>云音乐飙升榜</p>
    <p>云音乐电音榜</p>
    <p>UK排行榜周榜</p>
    <p>美国Billboard周榜</p>
    <p>KTV嗨榜</p>
    <p>iTunes榜</p>
    <p>Hit FM Top榜</p>
    <p>日本Oricon周榜</p>
    <p>韩国Melon排行榜周榜</p>
    <p>韩国Mnet排行榜周榜</p>
    <p>韩国Melon原声周榜</p>
    <p>中国TOP排行榜(港台榜)</p>
    <p>中国TOP排行榜(内地榜)</p>
    <p>香港电台中文歌曲龙虎榜</p>
    <p>华语金曲榜</p>
    <p>中国嘻哈榜</p>
    <p>法国 NRJ EuroHot 30周榜</p>
    <p>台湾Hito排行榜</p>
    <p>Beatport全球电子舞曲榜</p>
    <p>云音乐ACG音乐榜</p>
    <p>云音乐说唱榜</p>
    <p>云音乐古典音乐榜</p>
    <p>云音乐电音榜</p>
    <p>抖音排行榜</p>
    <p>新声榜</p>
    <p>云音乐韩语榜</p>
    <p>英国Q杂志中文版周榜</p>
    <p>电竞音乐榜</p>
    <p>云音乐欧美热歌榜</p>
    <p>云音乐欧美新歌榜</p>
    <p>说唱TOP榜</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowRank: false
    }
  }
}
</script>
<style lang="stylus" scoped>
#rank
  hei      100vh;
  position fixed
  top 0
  right 0
  left 0
  bottom 0
  background-color #fff
  z-index 1998
</style>