var Vue = require('vue')
var App = require('./app.vue')

var t={a:undefined,b:null,c:1}

for (let key in t) {
    console.log(key, t[key])
}

var a = {attrs: {foo:1}}
var b = {attrs: {bar:1}}
console.log({...a, ...b})

new Vue(App).$mount('#app')
