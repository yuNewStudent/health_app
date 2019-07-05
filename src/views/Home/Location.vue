<template>
  <div class="Location">
    <header-view :title='headerTitle'></header-view>
    <div class="map">
      <map-view :control='false' class="map_wrapper"></map-view>
      <div class="select">
        <select>
          <option value ="volvo">服务中心1</option>
          <option value ="saab">服务中心2</option>
          <option value="opel">服务中心3</option>
          <option value="audi">服务中心4</option>
        </select>
        <select>
          <option value ="volvo">已完成</option>
          <option value ="saab">未完成</option>
        </select>
      </div>
    </div>
    <scroll class="user_list" v-if='all'>
      <p class="title">人员信息</p>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
      <li class="user_item">
        <span class="name">张三</span>
        <span class="age">78</span>
        <span class="address">成都市锦江区黄金楼一街12栋2单元8号</span>
        <span class="address"><img src="@/assets/icon/导肮IC.png" alt=""></span>
      </li>
    </scroll>
    <div class="user_info" v-else>
      <p class="title">人员信息</p>
      <p>
        <span>姓名: 余建</span>
        <span>年龄: 26</span>
        <span>档案编号: DF1s2A3s4</span>
      </p>
      <p>
        <span>身份证号码: 513033049944565</span>
        <span>失能情况: 一般</span>
      </p>
      <p>
        <span>地址: 成都市锦江区某某区某某门牌号<img src="@/assets/icon/导肮IC.png" alt=""></span>
      </p>
    </div>
  </div>
</template>

<script>
import MapView from '@/components/amap'
import Scroll from '@/components/scroll'
import HeaderView from '@/components/Header'
export default {
  components: {
    MapView,
    Scroll,
    HeaderView
  },
  data () {
    return {
      all: false,
      headerTitle: '地图'
    }
  },
  computed: {},
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
.Location{
  position: fixed;
  top: .48rem;
  bottom: 1rem;
  .map {
    position: relative;
    .map_wrapper {
      width: 100vw;
      height: 7.5rem;
      position: relative;
    }
    .select {
      position: absolute;
      top: .2rem;
      left: .20rem;
      overflow: hidden;
      select {
        vertical-align: top;
        padding: 4px 5px 6px;
        border-radius: 5px;
        float: left;
        margin-right: 5px;
        box-shadow:0px 2px 5px 0px rgba(136,136,136,0.7);
        background: white;
      }
    }
  }
  .user_list {
    padding: 0 .2rem;
    width: 100vw;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    top: 8.46rem;
    overflow: hidden;
    .user_item {
      font-size: .24rem;
      display: flex;
      justify-content: space-between;
      margin: .2rem 0;
      color:rgba(49,49,49,1);
      img{
        width: .26rem;
        height: .26rem;
      }
    }
    .title {
      font-size: .34rem;
      padding: .25rem 0 .1rem;
    }
  }
  .user_info {
    padding: 0 .2rem;
    .title {
      font-size: .28rem;
    }
    p {
      font-size: .24rem;
      display: flex;
      margin: .15rem 0;
      justify-content: space-between;
      align-items: center;
      img{
        width: .24rem;
        height: .24rem;
        margin-left: .2rem;
      }
    }
  }
}
</style>
