<template>
    <div>
        <h1>{{hero.Hero}}</h1>
        <h2>CP: {{hero.CP}}</h2>
        <h2>Class: {{hero.Class}}</h2>
        <h2>Element: {{hero.Element}}</h2>
        <h2>Attack: {{hero.Attack}}</h2>
        <h2>Defence: {{hero.Defence}}</h2>
        <h2>Health: {{hero.Health}}</h2>
        <h2>Speed: {{hero.Speed}}</h2>
        <h2>Critical Hit Chance: {{hero.Crit}}</h2>
        <h2>Critical Hit Damage: {{hero.CritD}}</h2>
        <h2>Effectiveness: {{hero.Eff}}</h2>
        <h2>Effect Resistance: {{hero.EffR}}</h2>
        <h2>Dual Attack Chance: {{hero.DualAttack}}</h2>

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