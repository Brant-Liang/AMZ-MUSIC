<template>
<div class="menu">
  <transition name="slide">
    <div id="slider-menu" v-show="$store.state.isShowMenu">菜单</div>
  </transition>
  <div class="mask" v-show="$store.state.isShowMenu" @click="maskClick"></div>
</div>
</template>

<script>
export default {
  methods: {
    maskClick() {
      this.$store.commit('backToView')
    }
  }
};
</script>

<style scoped>
.menu {
  height: 100vh;
}
#slider-menu {
  position: fixed;
  top: 0;
  right: -100px;
  height: 100vh;
  width: 350px;
  background-color: floralwhite;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: (100% - 100px);
  background: rgba(0,0,0,0.4);
  transition: all 0.2 ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(300px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s;
}
</style>