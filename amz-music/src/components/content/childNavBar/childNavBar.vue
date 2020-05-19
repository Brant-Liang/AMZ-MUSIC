<template>
  <div class="child-nav-bar">
    <div class="back">
      <slot name="img"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.child-nav-bar
  padding 0 15px
  display: flex;
  height 50px
  line-height 50px
  align-items center
  border-bottom: 1px solid #eee;
  .back
    display flex
    justify-content center
    margin-right 20px
    img 
      width 16px
      height 16px
  .title
    color #333
    font-size 16px
    line-height 50px
</style>