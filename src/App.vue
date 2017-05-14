<template>
  <div id="app">
    <h1>{{title}}</h1>
    <form-view :fields="fields" :initials="initials"></form-view>
  </div>
</template>

<script>
var formView = require('./form.vue')

export default {
  name: 'app',
  components: {'form-view': formView},
  data () {
    var fields = [
      {name: 'grade', tag_name: 'radio', inline: true, choices: [['A', 'grade A'],['B', 'grade B']], attrs: {bar: 'barv'}}, 
      {name: 'name', tag_name: 'input',attrs: {foo: 'foov'}}, 
    ]
    var initials = { grade: 'B',name: 'Tom'}
    return {
      title: 'onchange event test',
      fields,
      initials
    }
  },
}
</script>