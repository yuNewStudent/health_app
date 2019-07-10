<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // console.log(0)
  }
}
</script>

<style>
@import './assets/css/reset.css';
html,body,#app{
  height: 100%;
}
.mint-tab-item-label {
  font-size: .36rem;
}
.mint-navbar  .is-selected.mint-tab-item {
  color: white;
  border-bottom: 2px solid white;
}
.amap-logo {
  display: none !important;
}
.amap-copyright {
  opacity: 0;
}
</style>
