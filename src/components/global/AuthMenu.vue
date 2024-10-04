<template>
    <nav>
        <ul>
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
    </nav>
</template>

<script>
    export default {
        name: "AuthMenu"
    }
</script>

<style scoped>
.nav-item {
    padding: .2rem;
}

nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: fit-content;
}
</style>