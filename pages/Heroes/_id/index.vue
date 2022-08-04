<template>
    <div>
        <h1>{{hero.Hero}}</h1>
        <h2>{{hero.Health}}</h2>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            hero:{}
        }
    },
    async created(){
        console.log("get hero/id")
        const res = await fetch('http://localhost:5000/api/heroes')
        const heroes = await res.json()
        console.log(heroes)
        heroes.forEach((Hero) => {
            
            if(Hero.Hero == this.$route.params.id){
                this.hero = Hero
            } 
        }

        )
        
    }
}
</script>

<style>

</style>