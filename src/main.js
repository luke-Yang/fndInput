import Vue from 'vue'
import App from './App.vue'

import FndInput from './plugin'
Vue.use(FndInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
