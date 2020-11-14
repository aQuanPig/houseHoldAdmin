import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需导入iview组件
import 'view-design/dist/styles/iview.css';
import './iview/myTheme/index.less'
import './iview/index'

// 导入iconfont
import './assets/css/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
