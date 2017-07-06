<template>
  <el-row>
    <el-col :span="tableSpan">
      <el-table :data="rows">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
        </el-table-column>
      </el-table>
    </el-col>
    
    <el-col v-if="filterFields" :span="24-tableSpan">
      <div v-for="(field, pi) in filterFields">
        <el-menu :index="pi" router>
          <el-menu-item v-for="(choice, index) in field.choices" :key="index" 
            :index="setFilterPath(field.name, choice[0])">
            {{ choice[1] }}
          </el-menu-item>
        </el-menu>

      </div>
    </el-col>
  </el-row>
</template>

<script>
var methods = {}

methods.setFilterPath = function (name, value) {
  return { path: this.$route.path, query: {name, value} }
}
methods.fetchData =  function () {
  return this.records.filter( e => e[this.$route.query.name] == this.$route.query.value)
}
export default {
  watch: {
    '$route': 'fetchData'
  },
  methods: methods,
  computed: {
    rows: function () {
      return this.fetchData()
    },
  },
  data: function () {
    return {
      records: [{
            date: '2016-05-02',
            name: '王小虎',
            sex: '男',
          }, {
            date: '2016-05-04',
            name: '李小虎',
            sex: '男',
          }, {
            date: '2016-05-01',
            name: '张小虎',
            sex: '男',
          }, {
            date: '2016-05-03',
            name: '王小猫',
            sex: '女',
          }],
      filterFields: [
        {name: 'sex', choices: [['男','男'], ['女', '女'] ]},
      ],
      tableSpan: 20,
    }
  },    
}
</script>
