<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" color="#8a8a8a" activeColor="#1D82FE">
        <img slot="icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
        <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
        <span slot="title">首页</span>
      </tab-bar-item>
      <tab-bar-item>

      </tab-bar-item>
      <tab-bar-item path="/profile" color="#8a8a8a" activeColor="#1D82FE">
        <img slot="icon-active" src="~assets/img/tabbar/me-active.svg" alt="">
        <img slot="icon" src="~assets/img/tabbar/me.svg" alt="">
        <span slot="title">我的</span>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
