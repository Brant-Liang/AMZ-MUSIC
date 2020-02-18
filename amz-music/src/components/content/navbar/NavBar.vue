<template>
  <div class="nav-bar">
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      <div class="search" @click="searchClick">
        <img src="~assets/img/nav-bar/search.svg" />
      </div>
      <div class="menu" @click="menuClick">
        <img src="~assets/img/nav-bar/menu.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  name: 'NavBar',
  methods: {
    searchClick() {
      this.$store.commit('serachShow')
    },
    menuClick() {
      this.$store.commit('menuShow')
    }
  }
};
</script>

<style>
.nav-bar {
  display: flex;
  height: 50px;
  color: #2c2c2c;
}
.nav-bar .left{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-bar .right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-bar img {
  width: 20px;
  height: 20px;
}
</style>