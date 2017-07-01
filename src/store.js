var Vue =  require('vue')
var Vuex = require('vuex')


Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    title: 'vuex + vue-router bug test',
  },
  mutations: {
    routeTo: function(state, kwargs) {
      state.route = {path: kwargs.path}
    },
  },
})


module.exports = store

