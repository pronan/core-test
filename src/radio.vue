<template>
  <div>
    <label>{{label}}:
      <template v-for="radio in radios">
        <div v-if="!radio.inline" class="radio">
          <label>
            <input v-bind="radio.attrs" @change="radio.change">
            {{radio.label}}
          </label>
        </div>
        <label v-else class="radio-inline">
            <input v-bind="radio.attrs" @change="radio.change">
            {{radio.label}}    
        </label>      
      </template>
    </label>
  </div>
</template>

<script>
export default {
  props: ['field', 'value', 'on'],
  computed: {
    label: function () {
      return this.field.label || this.field.name
    },
    radios: function () {
      var self = this
      return self.field.choices.map(function(c){
        var value = c[0], label = c[1]
        return {
          inline: self.field.inline,
          change: self.on.change,
          attrs: Object.assign({}, 
            self.field.attrs, 
            { type: 'radio', 
              name: self.field.name, 
              value: value, 
              checked:self.initial===value}),
          label: label,
        }
      })
    },
  },
}
</script>