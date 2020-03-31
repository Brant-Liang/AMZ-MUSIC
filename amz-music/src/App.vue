<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home" color="#8a8a8a" activeColor="#1D82FE">
        <img slot="icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
        <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
        <span slot="title">首页</span>
      </tab-bar-item>
      <music-bar/>
      <tab-bar-item path="/profile" color="#8a8a8a" activeColor="#1D82FE">
        <img slot="icon-active" src="~assets/img/tabbar/me-active.svg" alt="">
        <img slot="icon" src="~assets/img/tabbar/me.svg" alt="">
        <span slot="title">我的</span>
      </tab-bar-item>
    </tab-bar>
    <search/>
    <slider-menu/>
    <v-audio/>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
import MusicBar from 'components/content/musicBar/MusicBar'
import vAudio from 'views/audio/audio'
import search from 'views/search/Search'
import SliderMenu from 'components/content/silder-menu/Menu'
export default {
  components: {
    TabBar,
    TabBarItem,
    MusicBar,
    SliderMenu,
    search,
    vAudio
  }
}
</script>

<style lang="stylus">
@import 'assets/css/base.css';

</style>
