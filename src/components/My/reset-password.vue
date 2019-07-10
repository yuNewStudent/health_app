<template>
  <div class="reset_password">
    <mt-header title="修改密码" style="background:#002496;font-size:.36rem;height:.96rem">
      <span @click='back' slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div class="content">
      <div class="input_box">
        <label for="">原密码</label>
        <input type="password" placeholder="请输入原密码">
      </div>
      <div class="input_box">
        <label for="">新密码</label>
        <input type="password" placeholder="请输入新密码">
      </div>
      <div class="input_box">
        <label for="">确认密码</label>
        <input type="password" placeholder="请输入新密码">
      </div>
      <div class="button">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    back () {
      this.$emit('back')
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.reset_password {
  position: fixed;
  width: 100vw;
  top: .48rem;
  bottom: 0;
  background: #f6f6f6;
  .content {
    padding: .3rem .7rem;
    .input_box {
      display: flex;
      align-items: center;
      font-size: .24rem;
      margin: .3rem 0;
      label {
        width: 1.4rem;
      }
      input {
        flex: 1;
        height: .6rem;
        background:rgba(250,250,250,1);
        border: 1px solid rgba(211,211,211,1);
        border-radius: 2px;
        padding: 0 .1rem;
      }
    }
    .button {
      float: right;
      width: 1.20rem;
      height: .60rem;
      background:rgba(0,36,150,1);
      box-shadow: 0px 3px 5px 0px rgba(219,226,248,0.8), 0px -2px 4px 0px rgba(5,23,82,0.82);
      border-radius: 2px;
      text-align: center;
      color: white;
      line-height: .6rem;
      font-size: .28rem;
    }
  }
}
</style>
