import { defineStore } from 'pinia'

export default defineStore("auth", {
    state: () => ({
        isAuth: false,
        user: undefined
    }),
    getters: {
        userIsAuth: (state) => state.isAuth,
        userName: (state) => state.user ? state.user.email : ""
    },
    actions: {
        authUser(user) {
            if (user) {
                this.isAuth = true
                this.user = user
            }
        },
        onLogout() {
            this.user = undefined
            this.isAuth = false
        }
    }
})