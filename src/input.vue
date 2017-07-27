<template>
<div>
    <label>name{{dd && dd.number}}</label>
    <input type="text" name="name" :value="value" @input="nativeInput"/>
</div>
</template>

<script>

export default {
  name: 'inputs',
  props: ['value', 'dd'],
  data() {
    return {

    }
  },
  computed() {
    
  },
  methods: {
    nativeInput(e) {
        this.$emit('input', e.target.value)
    },
  },

}
</script>