<template>
  <div class="canvas">
    <canvas
      id='canvas'
      ref='canvas'
      @touchstart='touchstart'
      @touchmove='touchmove'></canvas>
    <div class="control">
      <span @click='clearCanvas'>清除</span>
      <span @click='savePic'>保存</span>
    </div>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      canvasLeft: 0,
      canvasTop: 0,
      lines: [],
      ctx: null,
      imgSrc: ''
    }
  },
  computed: {},
  methods: {
    initCavas () {
      let c = this.$refs.canvas
      this.canvasLeft = c.offsetLeft
      this.canvasTop = c.offsetTop + 48*document.body.offsetWidth/720
      this.ctx = c.getContext('2d')
    },
    touchstart (e) {
      const position = this.getPosition(e)
      this.ctx.beginPath()
      this.ctx.moveTo(position.x, position.y)
    },
    // click () {
    //   alert('click')
    // },
    touchmove (e) {
      const position = this.getPosition(e)
      this.ctx.lineTo(position.x, position.y)
      this.ctx.stroke()
    },
    getPosition (e) {
      let x = e.touches[0].clientX - this.canvasLeft
      let y = e.touches[0].clientY - this.canvasTop
      return { x, y }
    },
    // 清楚
    clearCanvas () {
      this.ctx.clearRect(0, 0, 300, 150)
    },
    // 保存
    savePic () {
      var dataURL = this.$refs.canvas.toDataURL()
      this.imgSrc = dataURL
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initCavas()
    })
  }
}
</script>
<style lang="scss" scoped>
.canvas{
  #canvas {
    // width: 300px;
    // height: 150px;
    border: 1px solid gray;
    margin: 0 auto;
  }
}
</style>
