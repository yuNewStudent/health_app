<template>
  <div class="amap">
    <div id="container"></div>
    <div class="control" v-if='control'>
      <span :class="{active:currentControl==='standar'}" @click='showStandardMap("standar")'>地图</span>
      <span :class="{active:currentControl==='satellite'}" @click='showSatelliteMap("satellite")'>卫星</span>
      <span :class="{active:isRanging}" @click='hnadleRanging()'>
        测距
        <!-- <img src="@/assets/img/data/尺子.png" alt=""> -->
      </span>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  props: ['control'],
  components: {},
  data () {
    return {
      map: null,
      ranging: null, // 测距
      isRanging: false,
      satellite: null,
      currentControl: 'standar'
    }
  },
  computed: {},
  methods: {
    // 初始化地图
    initMap () {
      this.map = new AMap.Map('container', {
        // 调整窗口大小
        resizeEnable: true,
        // 设置中心点
        center: this.center,
        // 地图显示范围
        zoom: 10
      })
      // 添加缩放标尺控件
      // AMap.plugin(['AMap.Scale'], () => {
      //   this.map.addControl(new AMap.Scale())
      // })
      // 默认样式测距
      // this.ranging = new AMap.RangingTool(this.map)
    },
    // 测距
    hnadleRanging () {
      if (!this.isRanging) {
        this.ranging.turnOn()
        this.isRanging = true
      } else {
        this.ranging.turnOff()
        this.isRanging = false
      }
    },
    // 显示标准地图
    showStandardMap (value) {
      this.currentControl = value
      this.satellite.setMap(null)
      this.satellite = null
    },
    // 显示卫星地图
    showSatelliteMap (value) {
      this.currentControl = value
      this.satellite = new AMap.TileLayer.Satellite({
        map: this.map
      })
      this.satellite.setMap(this.map)
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
  }
}
</script>
<style lang="scss" scoped>
.amap {
  width: 100%;
  height: 100%;
  #container {
    width: 100%;
    height: 100%;
  }
  .control {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(214,214,214,.9);
    height: 30px;
    line-height: 30px;
    color: black;
    font-size: 14px;
    span {
      float: left;
      font-weight: bold;
      padding: 0 10px;
      cursor: pointer;
      &.active {
        background: rgba(205,216,251,1);
      }
      img {
        height: 30px;
      }
    }
  }
}
</style>
