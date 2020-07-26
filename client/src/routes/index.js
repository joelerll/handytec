import VueRouter from 'vue-router'
import Chat from "../components/Chat"
import Main from "../components/Main";

const routes = [
  { path: '/chat', component: Chat },
  { path: '/', component: Main },
]

const router = new VueRouter({
    routes,
})

export default router