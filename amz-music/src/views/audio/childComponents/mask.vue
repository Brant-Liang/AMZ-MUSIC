<template>
  <div class="mask" :style="{backgroundImage: 'url('+ this.$store.state.songDesc.pic +')'} "></div> 
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.mask
  position fixed
  top 0
  left 0
  right 0
  height 100%
  z-index 1
  background-repeat no-repeat
  background-position 50%
  background-size auto 100%
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform scale(1.2)
  filter blur(12px)
  &:before
    content ""
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    background-color rgba(0,0,0, .7)
      
</style>