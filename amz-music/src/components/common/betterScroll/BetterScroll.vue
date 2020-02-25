<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    }
  },
  name: "Better-Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
        scrollX: this.scrollX,
        scrollY: this.scrollY
      });
      // 2、 监听滚动位置
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
      // 3、监听上拉事件
      // 4、监听滚到底部
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
      // this.scroll.refresh()
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    scrollToElement(el, time = 500) {
      this.scroll && this.scroll.scrollToElement(el ,time)
    }
  }
};
</script>

<style>
</style>