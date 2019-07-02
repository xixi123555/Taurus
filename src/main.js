import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import element from './elementUI/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
