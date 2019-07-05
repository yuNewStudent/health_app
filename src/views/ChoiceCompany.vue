<template>
  <div class="login">
    <div class="top">
      <div class="logo">
        <img src="" alt="">
      </div>
    </div>
    <div class="login_wrapper">
      <header>请选择公司</header>
      <div class="input_wrapper">
        <select>
          <option value ="volvo">服务中心1</option>
          <option value ="saab">服务中心2</option>
          <option value="opel">服务中心3</option>
          <option value="audi">服务中心4</option>
        </select>
      </div>
      <div class="submit" @click='handleLogin'>确定</div>
    </div>
  </div>
</template>

<script>
import { Switch, Toast, DatetimePicker, Indicator } from 'mint-ui'
export default {
  name: '',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleLogin () {
      this.$router.push({
        name: 'App'
      })
    }
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
    header {
      font-size: .26rem;
      text-align: center;
      margin-top: 1rem;
    }
    .input_wrapper {
      width: 100%;
      display: flex;
      align-content: center;
      height: .7rem;
      margin-top: .4rem;
      select {
        width: 6rem;
        box-shadow:0px 1px 2px 0px rgba(5,20,69,0.8) inset;
        background:rgba(237,240,250,1);
        border-radius:5px;
        padding: 0 .1rem;
      }
    }
    .submit {
      margin-top: 1rem;
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
