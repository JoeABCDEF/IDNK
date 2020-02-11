import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//
import axios from 'axios'
Vue.prototype.axios = axios;

//
import { Button, message } from 'ant-design-vue';
Vue.component(Button.name, Button)
Vue.prototype.message = message;
// Vue.component(Message.name, Message)
//
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')