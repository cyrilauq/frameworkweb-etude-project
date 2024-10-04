import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import { authRoutes } from './auth'
import { userRoutes } from './user'
import { errorRoutes } from './error'

import useAuthStore from '../stores/auth.js'

/**
 * On crée un routeur.
 * On lui donne un object avec 3 propriétés:
 *  - Un tableau de routes
 *  - un truc history
 *  - linkActiveClass: la classe à la page qui actuellement consultée.
 */
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...routes,
        ...authRoutes,
        ...userRoutes,
        ...errorRoutes
    ],
    linkActiveClass: 'text-yellow-500' // will tell vue router to add this class to the link of the active vue
})

router.beforeEach((to, from, next) => {
    console.log('Global Guard');

    if (!to.meta.requiresAuth) {
        next();
        return;
    }

    const store = useAuthStore()

    console.log('After:', store.userIsAuth);

    console.log(`Is the user logged in? ${store.userIsAuth}`);

    if (store.userIsAuth) {
        next();
    } else {
        next({ name: '403' });
    }
})

export default router