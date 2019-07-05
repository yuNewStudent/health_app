<template>
  <div class="wrapper" ref='scroll'>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: [],
  data () {
    return {}
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        probeType: 2,
        bounce: false,
        click: true
      })
      this.scroll.on('scroll', (pos) => {
        this.$emit('scroll', pos)
      })
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  }
}
</script>
