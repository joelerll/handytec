import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import router from "./routes"
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import { URL } from "./constants"

const socket = io(URL);

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueSocketIOExt, socket);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
