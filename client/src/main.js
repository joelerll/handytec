import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8080/chat',
    vuex: {
        options: {
            useConnectionNamespace: true
        }
  },
  options: {
      useConnectionNamespace: true
    }
}))

new Vue({
  sockets: {
    connect: () => {
        console.log('socket connected')
    }
  },
  render: h => h(App),
}).$mount('#app')
