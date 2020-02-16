<template>
  <div class="nav-bar">
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      <div class="search">
        <img src="~assets/img/nav-bar/search.svg" alt />
      </div>
      <div class="menu">
        <img src="~assets/img/nav-bar/menu.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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