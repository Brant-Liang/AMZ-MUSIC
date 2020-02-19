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

<style lang="stylus" scoped>
.func-item
  flex 1
  display block
  font-size 14px
  height 70px
  text-align center
  img 
    width 30px
    height 30px
    vertical-align middle
  span
    display block
    margin-top 10px
    color #666666
    font-size 14px
</style>