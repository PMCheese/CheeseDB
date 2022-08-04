<template>
  <div>
    <h1>List of Heroes:</h1>
    <Hero v-for="hero in heroes" :key="hero.Hero" :id="hero.Hero" :hero="hero.Hero" />
  </div>
</template>

<script>
import Heroes from '../components/Heroes'
import Hero from '../components/Hero'
import axios from 'axios'

const url = '/api/heroes'
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
      //const res = await fetch(url)
      const res = await axios.get(url)
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
