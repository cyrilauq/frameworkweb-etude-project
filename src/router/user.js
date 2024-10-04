import User from '../views/User.vue'
import Profile from '../components/user/Profile.vue'
import Collection from '../components/user/Collection.vue'

export const userRoutes = [
    {
        name: 'user',
        path: '/user/:user',
        component: User,
        // The children will be displayed inside the RouterView tags
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: Profile
            },
            {
                path: '',
                component: Profile
            },
            {
                path: 'collection',
                name: 'collection',
                component: Collection,
            }
        ],
        // With the meta property we can define custom property
        // So if we want to tell that this route require the user to be authenticated, then we add it here
        meta: {
            requiresAuth: true
        }
    }
]