import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Login from './Pages/Login.vue'
import SignUp from './Pages/SignUp.vue'
import Pub from './Pages/Pub.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/pubItem',
        component: Pub
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router