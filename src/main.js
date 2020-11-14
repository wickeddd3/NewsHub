import Vue from 'vue'
import App from './app/App.vue'
import router from './app/router'

import '@/app/scss/main.scss';

Vue.config.productionTip = false

import { newsApi } from './api';
Vue.prototype.$news = newsApi;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
