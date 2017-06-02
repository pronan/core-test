var Vue =  require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: {template: '<div>Home view</div>'}
    },
  ],
})

router.beforeEach(function (to, from, next) {
  console.log(router.app.$store.state.router)
  next()
})

module.exports = router