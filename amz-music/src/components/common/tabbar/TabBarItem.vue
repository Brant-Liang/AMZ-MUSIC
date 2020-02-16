<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="icon-active"></slot>
    </div>
    <div v-else>
      <slot name="icon"></slot>
    </div>
    <div :style="styleColor">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    color: {
      type: String,
      default: '#8a8a8a'
    },
    activeColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleColor() {
      return {color: this.isActive ? this.activeColor : this.color}
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
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 8px;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  vertical-align: middle;
  margin-bottom: 4px;
}
</style>