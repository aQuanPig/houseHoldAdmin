import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import("../views/Main.vue")
const EmployeeList = () => import("../views/employee/EmployeeList.vue")
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: "employee", component: EmployeeList }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
