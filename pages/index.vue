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



  methods: {
    async fetchData() {
      console.log("get pages/index")
      try{
        //const res = await this.$api.getData()
        //const res = await axios.get("/api/heroes")
        //const res = this.$api.loadHeroesCollection
        const res = await fetch ('http://0.0.0.0:5000/api/heroes')
        const data = await res.json()
        //console.log(data)
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
