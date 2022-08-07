<template>
    <div>
        <div  class = "topstats">
        
        <h1>{{hero.name}}</h1>
        <h2>CP: {{heroStats60.cp}}</h2>
        <h2>Class: {{hero.role}}</h2>
        <h2>Rarity: {{hero.rarity}}*</h2>
        <h2>Element: {{hero.attribute}}</h2>
        <h2>Attack: {{heroStats60.atk}}</h2>
        <h2>Defence: {{heroStats60.def}}</h2>
        <h2>Health: {{heroStats60.hp}}</h2>
        <h2>Speed: {{heroStats60.spd}}</h2>
        <h2>Critical Hit Chance: {{heroStats60.chc}}</h2>
        <h2>Critical Hit Damage: {{heroStats60.chd}}</h2>
        <h2>Effectiveness: {{heroStats60.effr}}</h2>
        <h2>Effect Resistance: {{heroStats60.eff}}</h2>
        <h2>Dual Attack Chance: {{heroStats60.dac}}</h2>

        </div>

        <div class = "midskills">
        <h1>Skills</h1>
        <h2>{{}}</h2>
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
            hero:{},
            heroStats:{},
            heroStats60:{},
            skills:[],
            skill0:{},
        }
    },
    async created(){

        try{
            console.log("get hero/id")
            console.log(this.$route.params.id)
            const res = await this.$api.getOneData(this.$route.params.id)
            this.hero = await res.json()
            this.heroStats = await this.hero.calculatedStatus
            this.heroStats60 = await this.heroStats.lv60SixStarFullyAwakened
            this.skills = await this.hero.ex_equip
            this.skill0 = await this.skills[0].skills[0]
            this.skill1 = await this.skills[1].skills[1]
            this.skill2 = await this.skills[2].skills[2]
            //this.hero = await JSON.parse(res)
            //console.log('return json:')
            //console.log(this.hero)
        }catch(err){
            console.log(err)
        }
        
    },
    head(){
        return{
            title: "CheeseDB || " + this.hero.name,

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