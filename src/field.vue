<script>
var input = require('./input.vue')
var radio = require('./radio.vue')

export default {
  props: ['field', 'initial'],
  functional: true,
  render (h, context) {
    var field = context.props.field
    var form = context.parent
    var data = {
      attrs: {
        on: {},
        field: field,
        value: context.props.initial,
      }
    }
    var attrs = data.attrs
    switch (field.tag_name) {
      case 'input':
        attrs.on.input = function(e) {
          form.collectValue(field.name, e.target.value)
        }
        return h(input, data)
      case 'radio':
        attrs.on.change = function(e) {
          form.collectValue(field.name, e.target.value)
        }
        return h(radio, data)
      default:
        alert('invalid tag name:', field.tag_name)
    }
  },
}
</script>