var Vue =  require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: {template: '<div>Home view</div>'}
    },
    {
      path: '/test', 
      component: {template: '<div>Router in state worked in beforeEach hook</div>'}
    },
  ],
})

router.beforeEach(function (to, from, next) {
  if (router.app.$store === undefined) {
    console.log('router.app.$store is undefined')
  } else if (router.app.$store.router === undefined) {
    console.log('router.app.$store.router is undefined')
  }
  // var store = require('./store')
  // if (to.path!=='/test') {
  //   next(false)
  //   store.state.router.push({path:'/test'})
  // } else {
  //   next()
  // }
})

module.exports = router