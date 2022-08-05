<template>
    <div>
        <div  class = "topstats">
        
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

        <div class = "midskills">
        <h1>Skills</h1>
        <h2>{{hero.S1Name}}</h2>
        <h3>{{hero.S1Desc}}</h3>
        <h2>{{hero.S2Name}}</h2>
        <h3>{{hero.S2Desc}}</h3>
        <h2>{{hero.S3Name}}</h2>
        <h3>{{hero.S3Desc}}</h3>
        </div>  
       
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
        
    },
    head(){
        return{
            title: "CheeseDB || " + this.hero.Hero,

        }
    }
}
</script>

<style>

.topstats{
    padding: 2rem;
    padding-bottom: 4rem; 
}

</style>