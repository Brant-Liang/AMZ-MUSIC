<template>
  <div class="home">
    <nav-bar>
      <nav-bar-item path='/home/recommand'>推荐</nav-bar-item>
      <nav-bar-item path='/home/video'>视频</nav-bar-item>
      <nav-bar-item path='/home/dj'>电台</nav-bar-item>
    </nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import NavBarItem from 'components/content/navbar/NavBarItem'
export default {
  name: 'Home',
  components: {
    NavBar,
    NavBarItem
  }
}
</script>
