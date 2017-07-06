import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import App  from './app.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue(App).$mount('#app')
