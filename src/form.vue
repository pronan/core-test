<template>
  <form>
    <div v-for="field in fields">
      <field-view :field="field" :initial="formData[field.name]"></field-view>       
    </div>
    <button type="submit">submit</button>
  </form>
</template>

<script>
var fieldView = require('./field.vue')

export default {
  props: ['fields', 'initials'],
  components: {'field-view': fieldView},
  data () {
    var formData = {}
    for (var key in this.initials) {
      formData[key] = this.initials[key]
    }
    return {
      formData: formData,
    }
  },
  methods: {
    collectValue(key, value) {
      console.log('collectValue in form.vue:', key, value)
      this.formData[key] = value
    },
  },
}
</script>