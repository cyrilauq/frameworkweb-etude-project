<template>
    <div>
        <h2>{{ name }}</h2>
    </div>
    <ul>
        <li>
            <RouterLink
                :to="{ name: 'profile' }"
            >
                Profile
            </RouterLink>
        </li>
        <li>
            <RouterLink
                :to="{ name: 'collection' }"
            >
                Collection
            </RouterLink>
        </li>
    </ul>
    <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'

export default {
    computed: {
        name() {
            return this.$route.params.user
        }
    },
}
</script>

<style lang="scss" scoped>

</style>