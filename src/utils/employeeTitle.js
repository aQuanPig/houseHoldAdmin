
const columns = [
  {
    type: "selection",
    width: 60,
    align: "center",
  },
  {
    title: "ID",
    key: "id",
    sortable: true,
    width: 70,
    align: "center",
  },
  {
    title: "姓名",
    key: "name",
    align: "center",
  },
  {
    title: "所在部门",
    slot: "class",
    align: "center",
  },
  {
    title: "手机号码",
    key: "number",
    width: 130,
    align: "center"
  },
  {
    title: "政治面貌",
    slot: "political",
    align: "center"
  },
  {
    title: "性别",
    key: "sex",
    align: "center"
  },
  {
    title: "地址",
    slot: "address",
    width: 260,
    align: "center",
  },
  {
    title: "出生日期",
    slot: "birthdate",
    width: 120,
    align: "center",
  },
  {
    title: "操作",
    slot: "action",
    width: 180,
    align: "center",
  }
]
export {
  columns
}