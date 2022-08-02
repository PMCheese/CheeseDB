<template>
  <div>
    <h1>List of Heroes:</h1>
    <Hero v-for="hero in heroes" :key="hero.Hero" :id="hero.Hero" :hero="hero.Hero" />
  </div>
</template>

<script>
import Heroes from '../components/Heroes'
import Hero from '../components/Hero'
export default {

  name: 'IndexPage',
  components: {
    Heroes,
  },

  data() {
    return {
      heroes: [],
    }
  },



  methods: {
    async fetchData() {
      const res = await fetch('http://localhost:5000/heroes')
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
