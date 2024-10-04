import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LikeApod from '../views/LikeApod.vue'

/**
 * une route à plusieurs propriétés:
 *  - name: nom de la route
 *  - path: où on va dans le site
 *  - component: le composant à afficher
 */
export default [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'likeapod',
        path: '/likeapod',
        component: LikeApod
    }
]