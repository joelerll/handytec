import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import vuetify from '@/plugins/vuetify'
// import colors from 'vuetify/lib/util/colors'

// import Vuetify from ‘vuetify’
// import ‘vuetify/dist/vuetify.min.css’

Vue.use(Vuetify)

const socket = io('http://localhost:8080');

Vue.use(VueSocketIOExt, socket);

import router from "./routes"

Vue.config.productionTip = false

Vue.use(VueRouter)
// new Vuetify({
//   theme: {
//     primary: colors.indigo.base,
//     info: colors.blue.lighten2,
//     accent: colors.green.lighten1,
//     error: colors.red.darken2
//   }
// })
// Vue.use(Vuetify)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
