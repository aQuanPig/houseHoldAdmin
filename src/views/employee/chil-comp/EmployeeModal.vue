<template>
  <Modal v-model="isModalShow" title="添加新员工~" on-ok="addEmployee">
    <p slot="header" class="header">
      <span class="title">添加用户</span>
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
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="所在部门" prop="class">
        <Select
          v-model="employee.class"
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
      <FormItem label="出生日期" >
        <DatePicker
          placeholder="选择您的出生日期"
          @on-change="dateChange"
          style="width: 200px"
          format="yyyy-MM-dd"
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
  </Modal>
</template>

<script>
export default {
  name: "EmployeeModal",

  props: {
    isShow: Boolean,
  },
  data() {
    return {
      isModalShow: false,
      employee: {
        name: "",
        sex: "",
        number: "",
        class: null,
        birthdate: null,
        address: "",
        political: null,
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "请填写您的姓名",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "请填写您的家庭地址",
            trigger: "blur",
          },
        ],
        birthdate: [
          {
            required: true,
            message: "请填写您的出生日期",
            trigger: "blur",
          },
        ],
        number: [
          {
            required: true,
            pattern: "^[1]+[3,8]+\\d{9}$",
            len: 11,
            message: "请输入11位数字",
            trigger: "change",
          },
        ],
        sex: [
          {
            required: true,
            message: "请选择您的性别",
            trigger: "change",
          },
        ],
        class: [
          {
            required: true,
            type: "number",
            message: "请选择您的部门",
            trigger: "change",
          },
        ],
        political: [
          {
            required: true,
            type: "number",
            message: "请选择您的政治面貌",
            trigger: "change",
          },
        ],
      },
    };
  },
  watch: {
    isShow(newVal) {
      this.isModalShow = newVal;
    },
  },
  methods: {
    addEmployee() {
      console.log(this.employee);
    },
    dateChange(date) {
      this.employee.birthdate = date;
      console.log(typeof this.employee.birthdate,date);
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