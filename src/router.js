import Vue from 'vue'
import VueRouter from 'vue-router'
import listView from './list.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes:[
    {
      path:'/', 
      name: 'list',
      component: listView,
    },
  ],
})

export default router