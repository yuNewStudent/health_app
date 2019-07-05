<template>
  <div class="login">
    <div class="top">
      <div class="logo">
        <img src="" alt="">
      </div>
    </div>
    <div class="login_wrapper">
      <div class="input_wrapper">
        <span>
          <img src="@/assets/icon/账号IC.png" alt="">
        </span>
        <div class="input">
          <input type="text" name="" id="" placeholder="请输入手机号或工号">
        </div>
      </div>
      <div class="input_wrapper">
        <span>
          <img src="@/assets/icon/密码IC.png" alt="">
        </span>
        <div class="input">
          <input type="password" name="" id="" placeholder="请输入密码">
        </div>
      </div>
      <div class="control">
        <div class="remenber_password">记住密码</div>
        <div class="forget_password">忘记密码?</div>
      </div>
      <div class="submit" @click='handleLogin'>登录</div>
    </div>
  </div>
</template>

<script>
import { Switch, Toast, DatetimePicker, Indicator } from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      userInfo: {
        name: '',
        password: ''
      },
    }
  },
  computed: {
    // ...mapMutations(['setUser'])
  },
  methods: {
    
    // checkInputName(){ 
    //   // 判断是全为汉字
    //   var regex = /^[\u4E00-\u9FA5]+$/
    //   var name = this.userInfo.name
    //   if (!regex.test(name)) {
    //     this.NameStatus="error"
    //   } else {
    //     this.NameStatus="success"
    //   }
    // },
    // changeType () {
    //   if (this.type === 'text') {
    //     this.type = 'password'
    //     this.img = require('@/assets/icon/login/eye—open.png')
    //   } else {
    //     this.type = 'text'
    //     this.img = require('@/assets/icon/login/eye—close.png')
    //   }
    // },
    handleLogin () {
      // 选择公司
      this.$router.push({
        name: 'ChoiceCompany'
      })
    //   const data = {
    //     appuserNumber: this.userInfo.name,
    //     appuserPassword: this.userInfo.password
    //   }
    //   if (!this.userInfo.name || !this.userInfo.password) {
    //     return Toast({
    //       message: '登陆信息不能为空',
    //       iconClass: 'icon icon-success'
    //     })
    //   }
    //   Indicator.open('登陆中...')
    //   let timer = setTimeout(() => {
    //     Indicator.close()
    //     Toast({
    //       message: '服务器出错',
    //       iconClass: 'icon icon-error'
    //     })
    //   }, 5000)
    //   this.$http.post(`${config.httpBaseUrl}/appuser/login`, data).then(res => {
    //     clearTimeout(timer)
    //     Indicator.close()
    //     if (res.code === 200) {
    //       this.$router.push({
    //         name: 'Home'
    //       })
    //       this.$http.get(`${config.httpBaseUrl}/appuser/getappuser`, {
    //         params: {
    //           number: this.userInfo.name
    //         }}).then(res => {
    //         if (res.code === 200) {
    //           this.setUser(res.date.appuser)
    //           localStorage.setItem('user', JSON.stringify(res.date.appuser))
    //           this.$router.push({
    //             name: 'Home'
    //           })
    //         }
    //       })
    //     } else {
    //       Toast({
    //         message: '登陆失败\n账号和密码输入错误',
    //         iconClass: 'icon icon-success'
    //       })
    //     }
    //   })
    },
    // goRePassword () {
    //   this.$router.push({
    //     name: 'ResetPassword'
    //   })
    // },
    // goRegister () {
    //   this.$router.push({
    //     name: 'Register'
    //   })
    // }
  }
}
</script>

<style lang='scss' scoped>
.login {
  width: 100vw;
  height: 100vh;
  .top {
    height: 5.56rem;
    background:linear-gradient(0deg,rgba(0,36,150,1), rgba(21,70,223,1));
    border-radius: 0 0 .6rem .6rem;
    .logo {
      position: relative;
      top: 1.5rem;
      margin: 0 auto;
      border: 1px solid white;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
    }
  }
  .login_wrapper {
    position: absolute;
    top: 4rem;
    width: 6rem;
    height: 6.4rem;
    box-shadow: 0px 1px 4px 0px rgba(8,22,68,0.6);
    border-radius: 5px;
    background: white;
    left: 50%;
    margin-left: -3rem;
    box-sizing: border-box;
    padding: .5rem;
    .input_wrapper {
      width: 100%;
      display: flex;
      align-content: center;
      height: .7rem;
      margin-top: .8rem;
      background:rgba(237,240,250,1);
      border-radius: .7rem;
      box-shadow: 0px 1px 2px 0px rgba(5,20,69,0.8) inset;
      span {
        display: inline-block;
        box-shadow:0px 1px 2px 0px rgba(5,20,69,0.8) inset;
        border-radius:.35rem;
        width: .7rem;
        height: .7rem;
        position: relative;
        img {
          width: .3rem;
          height: .3rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .input {
        border-radius:.35rem;
        flex: 1;
        padding: 0 .2rem;
        height: .5rem;
        margin-top: .1rem;
        input {
          width: 100%;
          height: 100%;
          vertical-align: top;
          background:rgba(237,240,250,1);
          border-radius:.35rem;
          font-size: .26rem;
        }
      }
    }
    .control {
      overflow: hidden;
      font-size: .24rem;
      margin: .1rem 0;
      .remenber_password {
        float: left;
        color:rgba(0,36,150,1);
      }
      .forget_password {
        float: right;
        color:rgba(49,49,49,1);
      }
    }
    .submit {
      margin-top: 30px;
      line-height: .7rem;
      background:rgba(0,36,150,1);
      border-radius:20px;
      font-size: .28rem;
      color: white;
      text-align: center;
    }
  }
}
</style>
