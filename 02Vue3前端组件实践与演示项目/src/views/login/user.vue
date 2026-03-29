<template>
    <el-button type="primary" :icon="Search" v-on:click="get_data">搜索</el-button>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="id" label="序号" width="180" />
    <el-table-column prop="username" label="姓名" width="180" />
    <el-table-column prop="email" label="邮件" />
    <el-table-column prop="phone" label="电话号码" />
  </el-table>
</template>

<script setup>

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

import axios from 'axios'
import {ref} from 'vue'

const tableData = ref([])
const get_data=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
        const filtered_data=res.data.map(item=>({
            id:item.id,
            username:item.username,
            email:item.email,
            phone:item.phone
        }))
        tableData.value=filtered_data
        
    })
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>

