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
        <h2>Effectiveness: {{heroStats60.eff}}</h2>
        <h2>Effect Resistance: {{heroStats60.efr}}</h2>
        <h2>Dual Attack Chance: {{heroStats60.dac}}</h2>

        </div>

        <div class = "midskills">
        <h1>Skills</h1>
        <h2>Skill 1</h2>
        <h2>{{skills0.name}}</h2>
        <h2>{{skill0descfixed}}</h2>
        <h2>{{skill0en.string}}</h2>
        <skillen v-for="skill in this.skill0en" :key="skill.name" :skillenhance="skill.string" />
        <h2>Skill 2</h2>
        <h2>{{skills1.name}}</h2>
        <h2>{{skill1descfixed}}</h2>
        <h2>{{skill1en.string}}</h2>
        <skillen v-for="skill in this.skill1en" :key="skill.name" :skillenhance="skill.string" />
        <h2>Skill 3</h2>
        <h2>{{skills2.name}}</h2>
        <h2>{{skill2descfixed}}</h2>
        <h2>{{skill2en.string}}</h2>
        <skillen v-for="skill in this.skill2en" :key="skill.name" :skillenhance="skill.string" />
        </div>  
       
    </div>  
    
</template>

<script>
import skillen from "../../../components/skillen.vue"
export default {

    components: {
        skillen,
    },


    data(){
        return {
            hero:{},
            heroStats:{},
            heroStats60:{},
            skills0:{},
            skills1:{},
            skills2:{},
            skill0en:[],
            skill1en:[],
            skill2en:[],
            skill0descfixed: "",
            skill1descfixed: "",
            skill2descfixed: ""
        }
    },
    async created(){

        try{
            console.log("get hero/id")
            console.log(this.$route.params.id)
            const res = await this.$api.getOneData(this.$route.params.id)
            this.heroDB = await res.json()
            this.hero = await this.heroDB.results[0]

            this.heroStats = await this.hero.calculatedStatus
            this.heroStats60 = await this.heroStats.lv60SixStarFullyAwakened

            this.skills0 = await this.hero.skills[0]
            this.skill0en = await this.skills0.enhancements
            this.skill0desc = await this.skills0.description
            this.skill0descfixed = await this.skill0desc.replace("{{variable}}", this.skills0.values)

            this.skills1 = await this.hero.skills[1]
            this.skill1en = await this.skills1.enhancements
            this.skill1desc = await this.skills1.description
            this.skill1descfixed = await this.skill1desc.replace("{{variable}}", this.skills1.values)

            this.skills2 = await this.hero.skills[2]
            this.skill2en = await this.skills2.enhancements
            this.skill2desc = await this.skills2.description
            this.skill2descfixed = await this.skill2desc.replace("{{variable}}", this.skills2.values)
            //this.hero = await JSON.parse(res)
            //console.log('return json:')
            //console.log(this.skill0en)
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