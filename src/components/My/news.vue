<template>
  <div class="news">
    <mt-header title="消息" style="background:#002496;font-size:.36rem;height:.96rem">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <ul class="news_wrapper">
        <li class="news_item">
          <p class="text">您本月的工作完成率仅完成97%，仍有6人未访问，请在本月底 完成访问。</p>
          <p class="time">2019/07/10</p>
        </li>
        <li class="news_item">
          <p class="text">您本月的工作完成率仅完成97%，仍有6人未访问，请在本月底 完成访问。</p>
          <p class="time">2019/07/10</p>
        </li>
        <li class="news_item">
          <p class="text">您本月的工作完成率仅完成97%，仍有6人未访问，请在本月底 完成访问。</p>
          <p class="time">2019/07/10</p>
        </li>
        <li class="news_item">
          <p class="text">您本月的工作完成率仅完成97%，仍有6人未访问，请在本月底 完成访问。</p>
          <p class="time">2019/07/10</p>
        </li>
      </ul>
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
.news {
  position: fixed;
  width: 100vw;
  top: .48rem;
  bottom: 0;
  background: #f6f6f6;
  .content {
    .news_wrapper {
      .news_item {
        font-size: .24rem;
        line-height: .36rem;
        background: white;
        margin-bottom: .15rem;
        box-shadow:0px 1px 4px 0px rgba(4,16,52,0.2);
        padding: .15rem .2rem;
        .time {
          text-align: right;
          color: rgba(136,136,136,1);
        }
      }
    }
  }
}
</style>
