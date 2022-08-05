<template>
    <div>
        <h1>{{hero.Hero}}</h1>
        <h2>CP: {{hero.CP}}</h2>
        <h2>Health: {{hero.Health}}</h2>
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

        try{
            console.log("get hero/id")
            console.log(this.$route.params.id)
            const res = await this.$api.getOneData(this.$route.params.id)
            this.hero = await res.json()
        }catch(err){
            console.log(err)
        }
        
    }
}
</script>

<style>

</style>