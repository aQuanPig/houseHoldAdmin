<template>
  <div class="main">
    <div class="header">
      <Button type="primary" size="large" class="btn">删除</Button>
      <Button type="primary" size="large" class="btn" @click="addEmployee"
        >添加</Button
      >
    </div>
    <Table
      border
      highlight-row
      height="300"
      :columns="columns"
      :data="employeeList"
    >
      <template slot-scope="{ row }" slot="class">
        <span>{{ row.class | getClassName }}</span>
      </template>
      <template slot-scope="{ row }" slot="birthdate">
        <span>{{ row.birthdate | getBirthDate }}</span>
      </template>
      <template slot-scope="{ row }" slot="address">
        <p class="ellipsis" :title="row.address">{{ row.address }}</p>
      </template>
      <template slot-scope="{ row }" slot="political">
        <span>{{ row.political | getPoliticalName }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="success"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          icon="ios-brush-outline"
          >编辑</Button
        >
        <Button
          type="error"
          icon="ios-trash-outline"
          size="small"
          @click="remove(row)"
          >删除</Button
        >
      </template>
    </Table>
    <Page :total="100" show-sizer class="page" />
    <!-- 对话框 -->
    <EmployeeModal :is-show="isAddShow"/>
  </div>
</template>

<script>
import EmployeeModal from "./EmployeeModal";

import { columns } from "utils/employeeTitle";

import dayjs from "dayjs";
export default {
  name: "EmployeeMain",
  components: {
    EmployeeModal,
  },
  props: {
    employeeList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      columns: columns,
      isAddShow: false,
    };
  },
  methods: {
    addEmployee() {
      console.log('diaji l ');
      this.isAddShow = !this.isAddShow;
    },
  },
  filters: {
    getBirthDate(date) {
      return dayjs(date).format("YYYY-MM-DD");
    },
    getClassName(num) {
      switch (num) {
        case 0:
          return "财务部";
        case 1:
          return "家政部";
        case 2:
          return "其他部门";
      }
    },
    getPoliticalName(num) {
      switch (num) {
        case 0:
          return "中共党员";
        case 1:
          return "共青团员";
        case 2:
          return "群众";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  margin: 10px 0;
  .btn {
    margin-left: 10px;
    border-radius: 0;
    font-size: 14px;
    height: 40px;
    width: 68px;
    border-radius: 4px;
  }
}
.page {
  padding: 10px 0 15px;
}
</style>