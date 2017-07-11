import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    error: undefined,
    list: JSON.parse(localStorage.getItem('list')) || [],
  },
  mutations: {
    list: function(state, list) {
      state.list = list
    },
    error: function(state, error) {
      state.error = error
    },
  },
  actions: {
    list (ctx, kwargs) {
      setTimeout(() => {
        ctx.commit('list', [{ksmc:'this is a title'}])
      }, 1000)
    },
  },
})


export default store

