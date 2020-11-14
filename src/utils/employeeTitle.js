
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
    slot: "section",
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
const ruleValidate = {
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
  section: [
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
}
export {
  columns,
  ruleValidate
}