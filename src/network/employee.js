import { request } from './request';

export function getAllEmployee() {
  // 默认是GET方法
  return request({
    url: "/employee"
  })
}