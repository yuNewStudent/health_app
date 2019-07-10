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
// import AMap from 'AMap'
export default {
  props: ['control'],
  components: {},
  data () {
    return {
      map: null,
      ranging: null, // 测距
      isRanging: false,
      satellite: null,
      currentControl: 'standar',
      addressArr: [
        {
          address: '四川省成都市武侯区ocg国际中心'
        },
        {
          address: '四川省成都市锦江区静康路536号'
        },
        {
          address: '四川省成都市成华区二仙桥东三路1号'
        },
        {
          address: '四川省成都市青羊区金沙遗址路8号'
        },
        {
          address: '四川省成都市武侯区肖家河街40号'
        },
        {
          address: '四川省成都市成华区八里桥路67号'
        }
      ]
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
      // 地址、经纬度转换
      AMap.plugin(['AMap.Geocoder'], () => {
        this.geocoder = new AMap.Geocoder({
          radius: 1000,
          extensions: 'all'
        })
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
    },
    // 地址转为经纬度
    translateLngLat (address) {
      return new Promise((resolve, reject) => {
        this.geocoder.getLocation(address, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // result中对应详细地理坐标信息
            // console.log(result.geocodes[0].location)
            const lnglat = [result.geocodes[0].location.lng, result.geocodes[0].location.lat]
            resolve(lnglat)
          }
        })
      })
    },
    // 绘制圆形
    drawCircle (center) {
      var circleMarker = new AMap.CircleMarker({
        center,
        radius: 7,//3D视图下，CircleMarker半径不要超过64px
        strokeColor:'white',
        strokeWeight: 2,
        strokeOpacity: 0.5,
        fillColor:'rgba(84,118,224,1)',
        fillOpacity: 1,
        zIndex: 1,
        bubble: true,
        cursor: 'pointer',
        clickable: true
      })
      circleMarker.setMap(this.map)
      circleMarker.on('click', () => {
        this.$emit('showInfo')
      })
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      this.initMap()
      this.addressArr.forEach(item => {
        this.translateLngLat(item.address).then(data => {
          this.drawCircle(data)
        })
      })
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
