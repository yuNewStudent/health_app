<template>
  <header>
    <div class="logo">
      <span></span>
      <span></span>
    </div>
    <div>{{title}}</div>
    <div class="station">
    </div>
  </header>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
    }
  },
  components: {
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
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
</style>
