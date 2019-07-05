<template>
  <div class="write">
    <header>填写问卷</header>
    <div class="visited_person">
      <p class="title">被访人</p>
      <p class="search">
        <input type="text" placeholder="请填入人名/档案号/身份证">
        <img src="@/assets/icon/搜索IC.png" alt="">
      </p>
      <div class="tips">确定被访人，以便生成被访人基本信息。</div>
      <div class="user_info">
        <p>
          <span>余建</span>
          <span>26</span>
          <span>513033049944565</span>
        </p>
        <p>
          <span>余建</span>
          <span>26</span>
          <span>513033049944565</span>
        </p>
        <p>
          <span>余建</span>
          <span>26</span>
          <span>513033049944565</span>
        </p>
        <p>
          <span>余建</span>
          <span>26</span>
          <span>513033049944565</span>
        </p>
      </div>
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
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
.write {
  background: #f6f6f6;
  header {
    width: 100vw;
    line-height: .96rem;
    text-align: center;
    color: white;
    font-size: .36rem;
    background:rgba(0,36,150,1);
  }
  .visited_person {
    text-align: center;
    padding: 0 .85rem;
    height: 3rem;
    .title {
      font-size: .28rem;
      margin: .3rem 0;
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
    .tips {
      font-size: .2rem;
      text-align: left;
      color:rgba(152,152,152,1);
      line-height: .36rem;
    }
    .user_info {
      p {
        font-size: .24rem;
        display: flex;
        margin: .2rem 0;
        color:rgba(49,49,49,1);
        justify-content: space-between;
      }
    }
  }
}
</style>
