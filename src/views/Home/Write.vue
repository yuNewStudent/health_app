<template>
  <div class="write">
  <header-view :title='headerTitle'></header-view>
    <div class="visited_person wrapper">
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
    <div class="write_type wrapper">
      <p class="title">请选择问卷类型</p>
      <ul>
        <li class="late">
          <img src="@/assets/icon/后期随访IC.png" alt="">
          <span>后期随访</span>
        </li>
        <li class="guide">
          <img src="@/assets/icon/回访指导IC.png" alt="">
          <span>回访指导</span>
        </li>
        <li class="degree">
          <img src="@/assets/icon/满意度IC.png" alt="">
          <span>满意度</span>
        </li>
      </ul>
    </div>
    <div class="comfirm">
      <button>开始填表</button>
    </div>
  </div>
</template>

<script>
import HeaderView from '@/components/Header'
export default {
  components: {
    HeaderView
  },
  data () {
    return {
      headerTitle: '问卷调查'
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
  position: fixed;
  top: .48rem;
  bottom: 1rem;
  header {
    width: 100vw;
    line-height: .96rem;
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
    .station {
      width: 1.2rem;
    }
  }
  .title {
    font-size: .28rem;
    padding: .3rem 0;
  }
  .wrapper {
    text-align: center;
    padding: 0 .85rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 6px 0px rgba(184,184,184,0.8);
    box-sizing: border-box;
  }
  .visited_person {
    height: 3rem;
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
      padding-top: .1rem;
      height: .66rem;
      overflow: hidden;
      p {
        font-size: .24rem;
        display: flex;
        margin-bottom: .1rem;
        // line-height: .3rem;
        color:rgba(49,49,49,1);
        justify-content: space-between;
      }
    }
  }
  .write_type {
    margin-top: .3rem;
    height: 3.2rem;
    ul {
      display: flex;
      justify-content: center;
      li {
        width: 1.72rem;
        height: 1.8rem;
        border-radius:6px;
        font-size: .26rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:nth-child(2) {
          margin: 0 .2rem;
        }
        img {
          width: .82rem;
          height: .64rem;
          margin-bottom: .2rem;
        }
        &.late {
          background:rgba(225,241,246,1);
        }
        &.guide {
          background:rgba(250,235,231,1);
        }
        &.degree {
          background:rgba(208,241,223,1);
          img {
            width: .71rem;
            height: .62rem;
          }
        }
      }
    }
  }
  .comfirm {
    padding: 0 .85rem;
    button {
      width: 100%;
      height: .6rem;
      line-height: .6rem;
      background:rgba(0,36,150,1);
      border-radius: 3px;
      border: none;
      outline: none;
      color: white;
    }
  }
}
</style>
