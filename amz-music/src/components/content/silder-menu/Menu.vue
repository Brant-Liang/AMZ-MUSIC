<template>
  <van-popup v-model="$store.state.isShowMenu" 
               position="right" 
               :style="{ width: '75%' }"
  >
    <div class="menu"></div>
  </van-popup>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
export default {
  data() {
    return {
      
    };
  },
  methods: {
    maskClick() {
      this.$store.commit("backToView");
    }
  }
};
</script>

<style scoped>
.menu {
  height: 100vh;
}
</style>