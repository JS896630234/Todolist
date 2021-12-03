import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router/index.js'

// 使用路由插件
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    // 设置bus函数为事件中间站，放到Vue的原生函数中
    Vue.prototype.$bus = this
  },
  // 设置路由为index
  router
}).$mount('#app')
