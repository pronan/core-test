<template>
<div id="app">
  <h1>{{title}}</h1>
  <router-view></router-view>
</div>
</template>

<script>
var store = require('./store.js')
var router = require('./router.js')

module.exports = { 
  store: store,
  router: router, 
  computed: {
    title: function () {
      return this.$store.state.title
    },
  },
}

</script>