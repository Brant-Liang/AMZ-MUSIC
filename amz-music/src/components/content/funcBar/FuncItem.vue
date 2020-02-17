<template>
  <div class="func-item">
      <slot name="func-img"></slot>
      <slot name="func-title"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.func-item {
  flex: 1;
  display: block;
  font-size: 14px;
  height: 70px;
  text-align: center;
}
.func-item img {
  width: 35px;
  height: 35px;
  vertical-align: middle;
}
.func-item span  {
  display: block;
  margin-top: 10px;
}
</style>