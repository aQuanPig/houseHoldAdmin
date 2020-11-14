<template>
  <div>
    <ZZContentPack firstTitle="主页" secondTitle="员工" thirdTitle="员工列表" />
    <EmployeeHeader />
    <EmployeeMain :employee-list="employeeList" />
  </div>
</template>

<script>
import ZZContentPack from "components/ZZContentPack";
import EmployeeHeader from "./chil-comp/EmployeeHeader";
import EmployeeMain from "./chil-comp/EmployeeMain";
import { getAllEmployee } from "network/employee";
export default {
  name: "EmployeeList",
  components: {
    ZZContentPack,
    EmployeeHeader,
    EmployeeMain,
  },
  data() {
    return {
      employeeList: [],
    };
  },
  methods: {
    async getAllEmployeeList() {
      const employeeList = await getAllEmployee();
      console.log(employeeList);
      this.employeeList = employeeList.result;
    },
  },
  created() {
    this.getAllEmployeeList();
  },
};
</script>

<style lang="less" scoped>
</style>