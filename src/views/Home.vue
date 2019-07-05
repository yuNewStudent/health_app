<template>
  <div class="home">
    <div class="bglayer"></div>
    <div class="contanier">
      <router-view></router-view>
    </div>
    <div class="nav">
      <ul>
        <li
          v-for='(item, index) in navs'
          :key='index'
          @click='handleRoute(item.name, index)'
          :class='{active: active==index}'>
          <img v-if='index==active' :src="actives[index].icon" alt="">
          <img v-else :src="item.icon" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { Indicator, Button, Actionsheet } from 'mint-ui'
export default {
  name: 'home',
  data () {
    return {
      active: 0,
      actives: [
        {
          icon: require('@/assets/icon/home/地图IC—高亮.png')
        },
        {
          icon: require('@/assets/icon/home/填写问卷_灰.png')
        },
        {
          icon: require('@/assets/icon/home/客户IC_灰.png')
        },
        {
          icon: require('@/assets/icon/home/我的IC—灰.png')
        }
      ],
      navs: [
        {
          title: '地图',
          icon: require('@/assets/icon/home/地图IC—高亮.png'),
          name: 'Location'
        },
        {
          title: '填写问卷',
          icon: require('@/assets/icon/home/填写问卷_灰.png'),
          name: 'Write'
        },
        {
          title: '客户',
          icon: require('@/assets/icon/home/客户IC_灰.png'),
          name: 'Customer'
        },
        {
          title: '我的',
          icon: require('@/assets/icon/home/我的IC—灰.png'),
          name: 'My'
        }
      ]
    }
  },
  created () {
    // this.$nextTick(() => {
    //   this.initMap()
    // })
  },
  computed: {
    route () {
      return this.$route.name
    }
  },
  components: {
    // Button,
    // Actionsheet
  },
  methods: {
    // 路由跳转
    handleRoute (name, index) {
      this.active = index
      this.$router.push({
        name
      })
    }
    // handle () {
    //   Indicator.open('加载中...')
    //   setTimeout(() => {
    //     Indicator.close()
    //   }, 2000)
    // },
    // handleShowSheetVisible () {
    //   this.sheetVisible = true
    // }
  }
}
</script>

<style lang='scss' scoped>
.home {
  .bglayer {
    width: 100vw;
    height: .48rem;
    background: rgba(0,36,150,1);
  }
  .contanier {
    position: fixed;
    width: 100vw;
    top: .48rem;
    bottom: 1rem;
    z-index: 6;
  }
  .nav {
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 100vw;
    background: white;
    z-index: 5;
    ul {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #DFDFDF;
      height: 1rem;
      box-sizing: border-box;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .2rem;
        align-items: center;
        flex: 1;
        &.active {
          color: rgba(0,36,150,1);
        }
        img {
          width: .46rem;
          height: .5rem;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
