<template>
  <div class="main">
    <div class="header">
      <Button
        type="primary"
        size="large"
        class="btn"
        @click="removePartEmployee"
        >删除</Button
      >
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
      @on-selection-change="selectEmployee"
    >
      <template slot-scope="{ row }" slot="section">
        <span>{{ row.section | getClassName }}</span>
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
      <template slot-scope="{ row }" slot="action">
        <Button
          type="success"
          size="small"
          style="margin-right: 5px"
          @click="editEmployee(row.id)"
          icon="ios-brush-outline"
          >编辑</Button
        >
        <Button
          type="error"
          icon="ios-trash-outline"
          size="small"
          @click="removeEmployee(row.id, row.name)"
          >删除</Button
        >
      </template>
    </Table>
    <Page :total="100" show-sizer class="page" />
    <!-- 对话框 -->
    <EmployeeModal :is-show="isAddShow" :edit-employee="oneEmployee" />
    <Modal
      v-model="isDeleteShow"
      title="温馨提示"
      @on-ok="confirmDelete"
      @on-cancel="$Message.info(`取消删除部分员工信息`)"
    >
    <p>请再次确认是否要删除这些员工信息</p>
    </Modal>
  </div>
</template>

<script>
import EmployeeModal from "./EmployeeModal";

import { columns } from "utils/employeeTitle";
import { getOneEmployee, deleteEmployee } from "network/employee";
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
      oneEmployee: {},
      selectionDelete: [],
      isDeleteShow: false,
    };
  },
  methods: {
    addEmployee() {
      this.isAddShow = !this.isAddShow;
    },
    async editEmployee(id) {
      const result = await getOneEmployee(id);
      this.oneEmployee = result;
      this.addEmployee();
    },
    removeEmployee(id, name) {
      this.$Modal.confirm({
        title: "提示",
        content: `<p>是否删除该员工信息：${name}</p>`,
        onOk: async () => {
          const result = await deleteEmployee(id);
          this.$parent.getAllEmployeeList();
          result === "删除成功"
            ? this.$Message.success(`成功删除该员工信息：${name}`)
            : this.$Message.error(`删除该员工信息：${name}失败`);
        },
        onCancel: () => {
          this.$Message.info(`取消删除该员工信息：${name}`);
        },
      });
    },
    selectEmployee(selection) {
      const result = [];
      selection.filter((item) => {
        result.push(item.id);
      });
      this.selectionDelete = result;
    },
    removePartEmployee() {
      if (this.selectionDelete.length !== 0) {
        this.$Modal.confirm({
          title: "谨慎操作",
          content: `<p>是否删除部分员工信息</p>`,
          onOk: () => {
            this.isDeleteShow = !this.isDeleteShow;
          },
          onCancel: () => {
            this.$Message.info(`取消删除操作`);
          },
        });
      } else {
        this.$Message.info("请选择要删除的员工信息");
      }
    },
    async confirmDelete() {
      const result = await deleteEmployee(JSON.stringify(this.selectionDelete));
      this.$parent.getAllEmployeeList();
      result === "删除成功"
        ? this.$Message.success(`成功删除部分员工信息`)
        : this.$Message.error(`删除部分员工信息失败`);
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