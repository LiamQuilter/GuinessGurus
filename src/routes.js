import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Login from './Pages/Login.vue'
import SignUp from './Pages/SignUp.vue'
import Pub from './Pages/Pub.vue'
import About from './Pages/About.vue'
import Map from './Pages/Map.vue'

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
        path: '/pubItem/:id',
        component: Pub
    },
    {
        path: '/aboutUs',
        component: About
    },
    {
        path: '/Map',
        component: Map
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router