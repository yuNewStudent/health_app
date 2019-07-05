<template>
<div class="me">
  <header-view :title='headerTitle'></header-view>
  <div class="user_info">
    <p class="head_icon">
      <img src="@/assets/icon/logo.png" alt="">
    </p>
    <p class="name">余建</p>
  </div>
  <ul class="navs">
    <li class="nav_item" @click='getCurrentLocation'>
      <img src="@/assets/icon/签到IC.png" alt="">
      <span>签到</span>
    </li>
    <li class="nav_item">
      <img src="@/assets/icon/消息IC.png" alt="">
      <span>消息</span>
    </li>
    <li class="nav_item">
      <img src="@/assets/icon/个人设置IC.png" alt="">
      <span>个人设置</span>
    </li>
  </ul>
</div>
</template>

<script>
import HeaderView from '@/components/Header'
export default {
  props: ['title'],
  components: {
    HeaderView
  },
  data () {
    return {
      headerTitle: '我的'
    }
  },
  computed: {},
  methods: {
    // 获取当前位置
    getCurrentLocation () {
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,     
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)
        function onComplete (data) {
          // data是具体的定位信息
          alert(data.formattedAddress)
        }
        function onError (data) {
          console.log(data)
          // 定位出错
        }
      })
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
.me {
  position: fixed;
  top: .48rem;
  bottom: 1rem;
  background: #f6f6f6;
  .user_info {
    text-align: center;
    height: 2.5rem;
    background: orange;
    .head_icon {
      margin-top: .4rem;
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius:50%;
      }
    }
    .name {
      font-size: .26rem;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    height: 1.8rem;
    background: white;
    box-shadow:0px 1px 6px 0px rgba(184,184,184,0.8);
    margin-top: .25rem;
    li {
      width: 1.72rem;
      height: 1.8rem;
      border-radius:6px;
      font-size: .26rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:nth-child(2) {
        margin: 0 .5rem;
      }
      img {
        width: 1rem;
        height: 1rem;
      }
      span {
        color:rgba(138,138,138,1);
        line-height: .4rem;
        font-size: .24rem;
      }
    }
  }
}
</style>
