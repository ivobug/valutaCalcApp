import Vue from 'vue'
import App from './App.vue'

import money from 'money'
import i18n from './i18n'

Vue.use(money)

Vue.filter('to-uppercase', (value)=>{
  return value.toUpperCase()
})

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
