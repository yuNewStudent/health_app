<template>
  <div class="customer_detail">
    <mt-header title="个人设置" style="background:#002496;font-size:.36rem;height:.96rem">
      <router-link to="/customer" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <ul class="customer_info">
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
        <li class="info_item last">
          <span class="left">姓名</span>
          <span class="right">余建</span>
        </li>
      </ul>
      <div class="write">
        <div class="write_wrapper">
          <img src="@/assets/icon/填写问卷IC.png" alt="">
          <span>填写问卷</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
export default {
  components: {
    Header
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    getCustomerDetail () {
    }
  },
  created () {
    console.log(this.$route.params.id)
    // 获取客户详情
    this.getCustomerDetail()
  }
}
</script>
<style lang="scss" scoped>
.customer_detail {
  position: fixed;
  width: 100vw;
  top: .48rem;
  bottom: 0;
  background: white;
  .content {
    .customer_info {
      font-size: .26rem;
      padding: 0 .2rem;
      margin-top: .4rem; 
      .info_item {
        border: 1px solid rgba(211,211,211,1);
        display: flex;
        height: .6rem;
        line-height: .6rem;
        &:not(.last) {
          border-bottom: none;
        }
        .left {
          width: 1.4rem;
          text-align: center;
          border-right: 1px solid rgba(211,211,211,1);
          background: rgba(220,227,249,1);
          color:rgba(102,102,102,1);
        }
        .right {
          padding-left: .3rem;
          color:rgba(49,49,49,1);
        }
      }
    }
    .write {
      text-align: right;
      margin-top: .3rem;
      .write_wrapper {
        float: right;
        display: flex;
        width: 1.73rem;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        height: .60rem;
        background:rgba(0,36,150,1);
        box-shadow: 0px 1px 3px 0px rgba(4,16,52,0.7);
        border-radius: .3rem 0 0 .3rem;
        img {
          width: .24rem;
          height: .26rem;
        }
        span {
          color:rgba(255,255,255,1);
          font-size: .24rem;
        }
      }
    }
  }
}
</style>
