<template>
  <Modal
    v-model="isModalShow"
    :loading="loading"
    :closable="false"
    :mask-closable="false"
  >
    <p slot="header" class="header">
      <span class="title">{{ getModalTitle }}</span>
    </p>
    <Form
      ref="employee"
      :model="employee"
      :label-width="80"
      :rules="ruleValidate"
    >
      <FormItem label="姓名" prop="name">
        <Input v-model="employee.name" class="item" placeholder="请输入姓名" />
      </FormItem>
      <FormItem label="电话号码" prop="number">
        <Input
          v-model="employee.number"
          class="item"
          placeholder="请输入电话号码"
        />
      </FormItem>
      <FormItem label="性别" prop="sex">
        <RadioGroup v-model="employee.sex">
          <Radio label="男">男</Radio>
          <Radio label="女">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="所在部门" prop="section">
        <Select
          v-model="employee.section"
          placeholder="选择您所在的部门"
          class="item"
        >
          <Option :value="0">财务部</Option>
          <Option :value="1">家政部</Option>
          <Option :value="2">其他</Option>
        </Select>
      </FormItem>
      <FormItem label="家庭地址" prop="address">
        <Input
          v-model="employee.address"
          class="item"
          placeholder="请输入家庭地址"
        />
      </FormItem>
      <FormItem label="出生日期">
        <DatePicker
          placeholder="选择您的出生日期"
          style="width: 200px"
          format="yyyy-MM-dd"
          v-model="employee.birthdate"
        ></DatePicker>
      </FormItem>
      <FormItem label="政治面貌" prop="political">
        <Select
          v-model="employee.political"
          placeholder="选择您的政治面貌"
          class="item"
        >
          <Option :value="0">中共党员</Option>
          <Option :value="1">共青团员</Option>
          <Option :value="2">群众</Option>
        </Select>
      </FormItem>
    </Form>
    <div slot="footer">
      <Button type="text" size="large" @click="cancleModal">取消</Button>
      <Button type="primary" size="large" @click="addEmployee">确定</Button>
    </div>
  </Modal>
</template>

<script>
import { insertEmployee, updateEmployee } from "network/employee";
import { ruleValidate } from "utils/employeeTitle";
import dayjs from "dayjs";
export default {
  name: "EmployeeModal",
  props: {
    isShow: Boolean,
    editEmployee: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isModalShow: false,
      employee: {
        name: "",
        sex: "",
        number: "",
        section: 0,
        birthdate: "",
        address: "",
        political: 0,
      },
      ruleValidate: ruleValidate,
      loading: true,
    };
  },
  computed: {
    getModalTitle() {
      return Object.keys(this.editEmployee).length !== 0
        ? "编辑员工信息"
        : "添加员工信息";
    },
  },
  watch: {
    isShow(newVal) {
      this.isModalShow = newVal;
    },
    editEmployee(newVal) {
      newVal.birthdate = dayjs(newVal.birthdate).format("YYYY-MM-DD");
      this.employee = newVal;
    },
  },
  methods: {
    addEmployee() {
      this.$refs["employee"].validate(async (valid) => {
        if (valid) {
          if (Object.keys(this.editEmployee).length !== 0) {
            const result = await updateEmployee(
              this.employee,
              this.employee.id
            );
            result === "修改员工信息成功"
              ? this.$Message["success"]("修改员工信息成功")
              : this.$Message["error"]("修改员工信息失败");
          } else {
            const result = await insertEmployee(this.employee);
            result === "添加员工成功"
              ? this.$Message["success"]("添加员工成功")
              : this.$Message["error"]("添加员工失败");
          }
          this.$parent.addEmployee();
          this.$refs["employee"].resetFields(); //重置表单
          this.$parent.$parent.getAllEmployeeList();
          this.employee = this.$options.data().employee;
        } else {
          this.$Message["error"]("请检查是否输入正确");
          this.$refs["employee"].resetFields(); //重置表单
        }
      });
    },
    cancleModal() {
      this.$parent.addEmployee();
      this.employee = this.$options.data().employee;
      console.log(this.employee);
      this.$Message["info"]({
        content: "取消删除操作",
      });
      this.$refs["employee"].resetFields(); //重置表单
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-modal-header {
  background-color: #898b8a;
}
.title {
  color: #fff;
}
.item {
  width: 60%;
}
</style>