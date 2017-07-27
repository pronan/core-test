<template>
<div>
    <h1>functional test</h1>
    <func v-bind="$data"></func>
    <naiveInput v-for="i in 3" :key="i" v-model="value" :dd="makef(i)"></naiveInput>
</div>

</template>

<script>
import func from './func.vue'
import input from './input.vue'

export default {
  name: 'app',
  components: {
    func,
    naiveInput: input,
  },
  data() {
    return {
        form: {
            name: 'inital name',
        },
        value:'',
    }
  },
  computed() {
    
  },
  methods:{
    makef(i) {
        return {number:i}
    },
  },
}
</script>