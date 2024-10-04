<template>
    <div class="header">
        <span>ApodApp</span>
        <nav class="header-menu">
            <ul>
                <li>
                    <RouterLink 
                        class="nav-item"
                        :to="{ name: 'home' }"
                    >
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink 
                        class="nav-item"
                        :to="{ name: 'about' }"
                    >
                        about
                    </RouterLink>
                </li>
                <li>
                    <RouterLink 
                        class="nav-item"
                        :to="{ name: 'likeapod' }"
                    >
                        Liked Apod
                    </RouterLink>
                </li>
            </ul>
        </nav>
        <div class="header-menu">
            <ul v-if="!userIsAuth">
                <li>
                    <RouterLink 
                        class="nav-item"
                        :to="{ name: 'register' }"
                    >
                        Register
                    </RouterLink>
                </li>
                <li>
                    <RouterLink 
                        class="nav-item"
                        :to="{ name: 'login' }"
                    >
                        Login
                    </RouterLink>
                </li>
            </ul>
            <div v-else>
                <span @click="logout">
                    Logout
                </span>
                <RouterLink 
                    :to="{ name: 'profile', params: { user: userName } }"
                >
                    Profile
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
    import useAuthStore from '../../stores/auth'
    import { mapState, mapActions } from 'pinia';

    export default {
        name: "Header",
        computed: {
            ...mapState(useAuthStore, ['userIsAuth']),
            ...mapState(useAuthStore, ['userName'])
        },
        methods: {
            ...mapActions(useAuthStore, ['authUser', 'onLogout']),
            logout() {
                this.onLogout()
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>

<style scoped>
.header {
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: row;
    left: 0;
    right: 0;
}

.nav-item {
    padding: .2rem;
}

.header-menu ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: fit-content;
}
</style>