<template>
  <div>
    <h1>List of Heroes:</h1>
    <Hero v-for="hero in this.heroes" :key="hero.Hero" :id="hero.Hero" :hero="hero.Hero" />
  </div>
</template>

<script>
import Heroes from '../components/Heroes'
import Hero from '../components/Hero'
import axios from 'axios'
export default {

  name: 'IndexPage',
  components: {
    Heroes,
    Hero,
  },

  data() {
    return {
      heroes: [],
    }
  },
 head(){
    return{
        title: "CheeseDB",
        meta: [{
          hid:"description",
          name: "description",
          content: "Database for Epic Seven"
        }
          
        ],

    }
  },


  methods: {
    async fetchData() {
      console.log("get pages/index")
      try{
        const res = await this.$api.getData()
        const data = await res.json()
        return data
      }catch(err){
        console.log(err)
      }
      
      
    },
  },

  async created() {
    this.heroes = await this.fetchData()
  },

}
</script>
