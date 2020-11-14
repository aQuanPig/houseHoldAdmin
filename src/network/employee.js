import { request } from './request';

// 获取员工信息
export function getAllEmployee() {
  // 默认是GET方法
  return request({
    url: "/employee"
  })
}
// 添加员工
export function insertEmployee(name, sex, section, number, address, birthdate, political) {
  return request({
    url: "/employee/add",
    method: "post",
    data: {
      name,
      sex,
      section,
      number,
      address,
      birthdate,
      political
    }
  })
}

// 获取某一个员工的信息
export function getOneEmployee(id) {
  return request({
    url: `/employee/${id}`
  })
}

// 修改某一个员工信息
export function updateEmployee(employee, id) {
  return request({
    method: "put",
    url: `/employee/${id}`,
    data: {
      ...employee
    }
  })
}

// 删除员工信息
export function deleteEmployee(id) {
  return request({
    url: `/employee/${id}`,
    method: "delete"
  })
}