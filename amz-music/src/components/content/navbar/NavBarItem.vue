<template>
  <div class="nav-bar-item" @click="itemClick" :class="{active: isActive}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NabBarItem',
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1  
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
}
</script>

<style>
.nav-bar-item {
  width: 48px;
  height: 100%;
  line-height: 50px;
  text-align: center;
}
.active {
  font-size: 24px;
  transition: 0.18s;
}
</style>