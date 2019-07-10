<template>
  <div class="setting">
    <mt-header title="个人设置" style="background:#002496;font-size:.36rem;height:.96rem">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <ul>
        <li>
          <div class="left">
            <img src="@/assets/icon/My/头像IC.png" alt="">
            <span>头像</span>
          </div>
          <div class="right">
            <img class="head_img" src="@/assets/icon/logo.png" alt="">
            <input type="file" name="" accept="image/gif,image/jpeg,image/jpg,image/png" @change="fileChange">
            <img class="active_img" src="@/assets/icon/My/箭头.png" alt="">
          </div>
        </li>
        <li>
          <div class="left">
            <img src="@/assets/icon/My/账号IC.png" alt="">
            <span>账号</span>
          </div>
          <div class="right">
            <span class="name">余建</span>
          </div>
        </li>
        <li @click='isShowResetPassword=!isShowResetPassword'>
          <div class="left">
            <img src="@/assets/icon/My/密码IC.png" alt="">
            <span>密码</span>
          </div>
          <div class="right">
            <span>******</span>
            <img class="active_img" src="@/assets/icon/My/箭头.png" alt="">
          </div>
        </li>
      </ul>
      <div @click='handleExit' class="exit_btn">退出登录</div>
    </div>
    <reset-password
      v-if='isShowResetPassword'
      @back='isShowResetPassword=!isShowResetPassword'></reset-password>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
import ResetPassword from '@/components/My/reset-password'
export default {
  components: {
    Header,
    ResetPassword
  },
  data () {
    return {
      isShowResetPassword: false
    }
  },
  computed: {},
  methods: {
    handleExit () {
      this.$router.push({
        name: 'Login'
      })
    },
    fileChange () {}
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.setting {
  position: fixed;
  width: 100vw;
  top: .48rem;
  bottom: 0;
  background: #f6f6f6;
  .content {
    li {
      display: flex;
      justify-content: space-between;
      font-size: .24rem;
      align-items: center;
      height: 1rem;
      background: white;
      margin-bottom: .2rem;
      padding: 0 .2rem;
      color:rgba(102,102,102,1);
      position: relative;
      .left {
        display: flex;
        align-items: center;
        img {
          width: .48rem;
          height: .48rem;
          margin-right: .1rem;
        }
      }
      .right {
        display: flex;
        align-items: center;
        input {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          border-radius: 50%;
          outline: none;
          opacity: 0;
          cursor: pointer;
        }
        .head_img {
          width: .8rem;
          height: .8rem;
          border-radius: 50%;
        }
        .active_img {
          margin-left: .2rem;
          width: .14rem;
          height: .22rem;
        }
      }
    }
    .exit_btn {
      width: 4.00rem;
      line-height: .70rem;
      background: linear-gradient(0deg, rgba(0,36,150,1), rgba(74,115,247,1));
      box-shadow: 0px -2px 3px 0px rgba(5,23,82,0.82), 0px 3px 4px 0px rgba(219,226,248,0.8);
      border-radius: .35rem;
      color: white;
      font-size: .28rem;
      text-align: center;
      margin: 2rem auto 0;
    }
  }
}
</style>
