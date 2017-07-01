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
      component: {template: '<div>routes by state change</div>'}
    },
  ],
})


module.exports = router