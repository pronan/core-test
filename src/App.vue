<template>
<div id="app">
  <h1>{{title}}</h1>
  <router-view></router-view>
</div>
</template>

<script>
var store = require('./store.js')
var router = require('./router.js')

var vrs = require('vuex-router-sync')

vrs.sync(store, router)

module.exports = { 
  beforeCreate () {console.log('beforeCreate...')},
  created () {console.log('created...foo:', this.$store.commit('routeTo', {path: '/test2'}))},
  store: store,
  router: router, 
  computed: {
    title: function () {
      return this.$store.state.title
    },
  },
}

</script>