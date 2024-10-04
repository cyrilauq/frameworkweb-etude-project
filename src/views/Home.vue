<script>
import Card from '../components/Card.vue'

export default {
    name: "Home",
    data() {
        return {
            cards: [],
            input: ''
        }
    },
    watch: {
        input(newValue) {
            console.log(this.input)
        }
    },
    components: {
        Card
    },
    beforeMount() {
        const currentDate = new Date();
        const pastDate = new Date(currentDate);
        pastDate.setDate(pastDate.getDate() - 7);
        var dateString = new Date(pastDate.getTime() - (pastDate.getTimezoneOffset() * 60000 ))
                            .toISOString()
                            .split("T")[0];
        var date2String = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000 ))
                            .toISOString()
                            .split("T")[0];
        fetch(`https://spacelab.henni.be/apod?start_date=${dateString}&end_date=${date2String}&count=7`)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(result => {
                console.log(result)
                this.cards = result.map(apod => {
                    return {
                        title: apod.title,
                        imgPath: apod.url,
                        date: apod.date
                    }
                })
            })
            .catch(console.log)
    }
}
</script>

<template>
<h1>Home</h1>
<section>
    <!-- 
        On itère dans le tableau de cartes
    -->
    <Card v-for="card in cards" :name="card.title" :imgPath="card.imgPath" :date="card.date" />
</section>
</template>

<style scoped>
h1 {
    width: 100%;
}
section {
    display: flex;
    flex-wrap: wrap;
}
</style>