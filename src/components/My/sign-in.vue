<template>
  <div class="sign_in">
    <!-- <mt-header title="签到" style="background:#002496;font-size:.36rem;height:.96rem">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header> -->
    <header>
      <router-link to="/my"><img src="@/assets/icon/返回箭头.png" alt=""></router-link>
      <mt-navbar v-model="selected">
        <mt-tab-item id="signin">签到</mt-tab-item>
        <mt-tab-item id="history">历史</mt-tab-item>
      </mt-navbar>
      <div class="station">
      </div>
    </header>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="signin">
        <div class="signin_box">
          <div class="pic" @click='getCurrentLocation'>
            <input type="file" name="image" capture="user" accept="image/gif,image/jpeg,image/jpg,image/png" @change="fileChange">
            <img v-if='!image' class="logo" src="@/assets//icon/照相机IC.png" alt="">
            <img v-else class="image" :src="image" alt="">
          </div>
          <div class="btn">签到</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="history">
        历史
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="content">
    </div>
  </div>
</template>

<script>
import { Header, Navbar, TabItem, Button  } from 'mint-ui'
export default {
  components: {
    Header,
    Navbar,
    TabItem,
    Button
  },
  data () {
    return {
      image: '',
      selected: 'signin'
    }
  },
  computed: {},
  methods: {
    fileChange (event) {
      var that = this
      var file = event.target.files[0]
      var reader = new FileReader()
      reader.onload = e => {
        that.image  = e.target.result
      }
      reader.readAsDataURL(file)
    },
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
  created () {}
}
</script>
<style lang="scss" scoped>
.sign_in {
  position: fixed;
  width: 100vw;
  top: .48rem;
  bottom: 0;
  background: #f6f6f6;
  header {
    width: 100vw;
    line-height: .96rem;
    height: .96rem;
    text-align: center;
    color: white;
    font-size: .36rem;
    background:rgba(0,36,150,1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .18rem;
    box-sizing: border-box;
    img {
      width: .25rem;
      height: .28rem;
    }
    .mint-navbar {
      background: transparent;
      padding: 0 .3rem;
      width: 3.5rem;
      height: .96rem;
      line-height: .96rem;
      .mint-tab-item {
        margin: 0 .2rem;
        padding: 13px 0;
        color: white;
      }
    }
    .station {
      width: .25rem;
    }
  }
  .signin_box {
    width: 3.00rem;
    margin: 0 auto;
    .pic {
      width: 3rem;
      height: 2rem;
      border: 1px solid rgba(211,211,211,1);
      line-height: 2rem;
      text-align: center;
      margin: .2rem 0 .3rem;
      position: relative;
      .logo {
        width: 1rem;
        height: 1rem;
      }
      .image {
        width: 3rem;
        height: 2rem;
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        opacity: 0;
      }
    }  
    .btn {
      width: 3.00rem;
      height: .60rem;
      line-height: .60rem;
      background: linear-gradient(90deg,rgba(74,115,247,1),rgba(0,36,150,1));
      border-radius: .30rem;
      color: white;
      font-size: .28rem;
      text-align: center;
    }
  }
}
</style>
