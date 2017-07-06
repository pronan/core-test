<template>
<div id="app">
  <h1>element 菜单bug测试</h1>
  <router-view></router-view>
</div>

</template>

<script>
import Vue from 'vue'
import router from './router.js'

export default { 
  router: router, 
  // updated: function () {console.log('admin.vue updated')},
  // mounted: function () {console.log('admin.vue mounted')},
  // computed: {
  // },
  // data: function () {
  //   return {
  //   }
  // },
}

</script>
