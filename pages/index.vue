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
      const res = await fetch('http://localhost:5000/api/heroes')
      //const res = await axios.get("http://localhost:5000/api/heroes")
      const data = await res.json()
      console.log(data)
      return data
    },
  },

  async created() {
    this.heroes = await this.fetchData()
  },
}
</script>
