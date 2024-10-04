<template>
    <div class="card" v-on:click="swapLikeStatus">
        <img :src="imgPath" />
        <span>{{ date }}</span>
        <h2>{{ name }}</h2>
        <h3>Liked : {{ liked }}</h3>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            liked: false
        }
    },
    emits: ['isLiked', 'isUnliked'],
    props: {
        imgPath: {
            type: String,
            required: true,
            default: "/src/assets/default-apod.jpg"
        },
        name: {
            type: String,
            required: true,
            default: "One APOD"
        },
        date: {
            type: String,
            required: false,
            default: new Date().toString()
        }
    }, 
    methods: {
        swapLikeStatus() {
            this.liked = !this.liked
            if (this.liked) {
                this.$emit('isLiked')
            } else {
                this.$emit('isUnliked')
            }
            
            
        }
    }
}
</script>

<style scoped>
img {
    height: 25rem;
    margin: 0;
    padding: 0;
    object-fit: contain;
    transition: all ease 1s;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
}
</style>