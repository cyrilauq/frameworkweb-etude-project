import Error401 from '../views/Errors/401.vue'
import Error403 from '../views/Errors/403.vue'
import Error404 from '../views/Errors/404.vue'
import Error500 from '../views/Errors/500.vue'

export const errorRoutes = [
    {
        name: '401',
        component: Error401,
    },
    {
        name: '403',
        component: Error403,
    },
    {
        name: '404',
        component: Error404,
    },
    {
        name: '500',
        component: Error500,
    },
    {
        path: '/:catchAll(.*)*', // this will catch all the routes that doesn't exist(because if the router goes to here, it means that the route doesn't exist)
        component: Error404,
    }
]