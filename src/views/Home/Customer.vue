<template>
  <div class="Customer">
    <header>
      <div class="logo">
        <span></span>
        <span></span>
      </div>
      <div v-if='!searching'>客户</div>
      <div class="search_btn" v-if='!searching' @click='searching=!searching'>
        <!-- <img src="@/assets/icon/搜索IC.png" alt=""> -->
        搜索
      </div>
      <transition name="fade">
        <p class="search" v-if='searching'>
          <input type="text" placeholder="请填入人名/档案号/身份证">
          <img src="@/assets/icon/搜索IC.png" alt="">
        </p>
      </transition>
    </header>
    <div class="select_wrapper">
      <div class="select_item">
        <select>
          <option value ="volvo">服务中心1</option>
          <option value ="saab">服务中心2</option>
          <option value="opel">服务中心3</option>
          <option value="audi">服务中心4</option>
        </select>
      </div>
      <div class="select_item">
        <select>
          <option value ="volvo">已回访</option>
          <option value ="saab">未回访</option>
        </select>
      </div>
      <div class="select_item">
        <select>
          <option value ="volvo">已随访</option>
          <option value ="saab">已随访</option>
        </select>
      </div>
    </div>
    <scroll class="customers_wrapper">
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
      <p class="customer">
        <span class="name">张三</span>
        <span class="age">67岁</span>
        <span class="service">服务中心A</span>
        <span class="visited">
          <span class="no">未回访</span>/<span>已随访</span>
        </span>
      </p>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll'
export default {
  components: {
    Scroll
  },
  data () {
    return {
      searching: false
    }
  },
  computed: {},
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
.Customer{
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
    .logo {
      height: .96rem;
      width: 1.2rem;
      position: relative;
      span {
        top: .15rem;
        position: absolute;
        display: inline-block;
        width: .64rem;
        height: .64rem;
        border: 1px solid white;
        border-radius: 50%;
        left: 0;
        &:last-child {
          left: .55rem;
        }
      }
    }
    .search_btn {
      width: 1.2rem;
      text-align: right;
    }
    .search {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background:rgba(241,244,255,1);
      border: 1px solid rgba(161,182,249,1);
      border-radius: 6px;
      padding: 0 10px;
      height: .6rem;
      input {
        font-size: .24rem;
        height: .6rem;
        box-sizing: border-box;
        flex: 1;
        background: transparent;
      }
      img {
        width: .38rem;
        height: .35rem;
      }
    }
  }
  .select_wrapper {
    height: .64rem;
    display: flex;
    border-bottom: 1px solid rgba(181,181,181,1);
    .select_item {
      flex: 1;
      height: .64rem;
      text-align: center;
      &:nth-child(2) {
        border-left: 1px solid rgba(181,181,181,1);
        border-right: 1px solid rgba(181,181,181,1);
      }
      select {
        vertical-align: top;
        // width: 100%;
        // padding: 0 20px;
        height: .64rem;
        background: white;
      }
    }
  }
  .customers_wrapper {
    position: fixed;
    top: 2.08rem;
    bottom: 1rem;
    padding: 0 .2rem;
    width: 100vw;
    box-sizing: border-box;
    overflow: hidden;
    .customer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: .24rem;
      padding: .2rem 0;
      border-bottom: 1px solid rgba(226,226,226,1);
      .visited {
        color: #002496;
        .no {
          color: red;
        }
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
