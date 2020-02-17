<template>
  <div class="nav-bar-item" @click="itemClick" :class="{active: isActive}">
    <span>
      <slot></slot>
    </span>
    <div v-if="isActive" class="color-active"></div>
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

<style scoped>
.nav-bar-item {
  width: 48px;
  height: 36px;
  text-align: center;
  line-height: 31px;
}
.active {
  font-size: 24px;
  transition: 0.18s;
}
.color-active {
  width: 10px;
  height: 5px;
  background-color: var(--color-high-text);
  border-radius: 2.5px;
  margin: 0 auto;
}
</style>