<template>
<table>
  <tbody>
  <tr>
    <th>title</th>
    <th>actions</th>
  </tr>
  <tr v-for="(item, index) in items">
    <td> {{item.title}} </td>
    <td> submit </td>
  </tr>
  </tbody>
</table>
</template>

<script>
export default {
  updated: function () {
    console.log('items.vue updated')
    this.$store.dispatch('list') 
  },
  mounted: function () {
    console.log('items.vue mounted')
    this.$store.dispatch('list')
  },
  computed: {
    items: function () {
      return this.$store.state.list.map(e => ( {title: e.ksmc } )) 
    },
  },
}
</script>
