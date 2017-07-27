<script>
import input from './input.vue'

export default {
  functional: true,
  render(h, ctx) {
    console.log(ctx)
    return h(input, {
        domProps: {
            value: ctx.props.form.name
        },
        props: {
            value: ctx.props.form.name
        },
        on: {
            input(value) {
                ctx.props.form.name = value
            },
        },
    })
  },
}
</script>