<template>
  <div class="home" v-show="!$store.state.isShowAudio">
    <nav-bar>
      <nav-bar-item path='/home/recommand'>推荐</nav-bar-item>
      <nav-bar-item path='/home/video'>视频</nav-bar-item>
      <nav-bar-item path='/home/dj'>电台</nav-bar-item>
    </nav-bar>
      <better-scroll class="content">
        <keep-alive>
        <router-view></router-view>
    </keep-alive> 
      </better-scroll>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import NavBarItem from 'components/content/navbar/NavBarItem'
import BetterScroll from '../../components/common/betterScroll/BetterScroll'
export default {
  name: 'Home',
  components: {
    NavBar,
    NavBarItem,
    BetterScroll
  }
}
</script>

<style lang="stylus" scoped>
.content 
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow: hidden;
</style>
