<template>
  <Form
    :model="formItem"
    :label-width="80"
    inline
    class="form"
    label-position="right"
  >
    <FormItem label="员工ID" label-for="userid" class="form-item">
      <Input
        v-model="formItem.id"
        element-id="userid"
        placeholder="请输入..."
        size="large"
      />
    </FormItem>
    <FormItem label="姓名" label-for="name" class="form-item">
      <Input
        v-model="formItem.name"
        element-id="name"
        placeholder="请输入..."
        size="large"
      />
    </FormItem>
    <FormItem label="所在部门" label-for="class" class="form-item">
      <Input
        v-model="formItem.name"
        element-id="class"
        placeholder="请输入..."
        size="large"
      />
    </FormItem>
    <FormItem label="性别" class="form-item">
      <Select v-model="formItem.sex" size="large">
        <Option value="all">不限</Option>
        <Option value="woman">女</Option>
        <Option value="man">男</Option>
      </Select>
    </FormItem>
    <Button icon="ios-search" type="primary" class="btn"></Button>
  </Form>
</template>

<script>
export default {
  name: "EmployeeHeader",
  data() {
    return {
      formItem: {
        input: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.form {
  display: flex;
  padding: 10px 0 0 80px;
  flex-wrap: wrap;
  border-bottom: 1px dashed rgba(100, 100, 100, 0.1);
  .form-item {
    width: 300px;
  }
  .btn {
    width: 50px;
    height: 40px;
    border-radius: 1px;
    font-size: 15px;
  }
}
</style>