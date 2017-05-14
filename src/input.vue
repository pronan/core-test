<template>
  <label>{{label}}:<input v-bind="attrs" @input="input"></label>
</template>

<script>
export default {
  props: ['field', 'value', 'on'],
  data() {
    var field = this.field
    var attrs = Object.assign({}, field.attrs, {
      name: field.name,
      type: 'text',
      value: this.value
    })
    return {
      attrs,
      input: this.on.input,
      label: field.label || field.name,
    }
  },
}
</script>