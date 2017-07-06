// import Vue from 'vue'
import VueRouter from 'vue-router'
import listView from './list.vue'


var router = new VueRouter({
  routes:[
    {
      path:'/', 
      redirect:'/list'
    },
    {
      path: '/list',
      component: listView,
    },
  ],
})


export default router