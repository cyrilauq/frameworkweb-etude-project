<script>
import { mapStores, mapActions, mapState } from 'pinia';
import Card from '../components/Card.vue'
import { useCounterStore } from '../stores/ApodLikeCounter.js'

export default {
    name: 'LikeApod',
    components: {
        Card
    },
    computed: {
        // J'importe les getter ici, car un getter d'un store est l'équivalent des computed properties d'un composant
        ...mapState(useCounterStore, ['getCount'])
    },
    methods: {
        // J'importe les actions ici, car un actions d'un store est l'équivalent d'une méthode d'un composant
        ...mapActions(useCounterStore, ['increment']),
        ...mapActions(useCounterStore, ['decrement']),
        incrementCounter() {
            this.increment()
        },
        decrementCounter() {
            this.decrement()
        }
    }
};
</script>

<template>
    <p class="counter">Compteur de carte liké : {{ getCount }}</p>
    <Card @isLiked="incrementCounter" @isUnliked="decrementCounter" name="Exemple1" imgPath="@/assets/default-apod.jpg" date="UNE DATE"></Card>
    <Card @isLiked="incrementCounter" @isUnliked="decrementCounter" name="Exemple2" imgPath="@/assets/default-apod.jpg" date="UNE DATE"></Card>
    <Card @isLiked="incrementCounter" @isUnliked="decrementCounter" name="Exemple3" imgPath="@/assets/default-apod.jpg" date="UNE DATE"></Card>
</template>

<style>
.counter {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: large;
}
</style>