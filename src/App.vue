<template>
<div id="app">
  <h1>list bug test</h1>
  <router-view></router-view> 
</div>
</template>

<script>
import store from './store.js'
import router from './router.js'

export default {
  store,
  router,
}
</script>