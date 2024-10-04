import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

export const authRoutes = [
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
]