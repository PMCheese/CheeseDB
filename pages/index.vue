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
      const res = await fetch('/api/heroes')
      const data = await res.json()
      return data
    },
  },

  async created() {
    this.heroes = await this.fetchData()
  },
}
</script>
