export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('api', api);
    // For Nuxt <= 2.12, also add 👇
    context.$api = api;
  }

import axios from 'axios'

const api = {
    getData() {
        console.log('api get data')
        return fetch('/api/heroes');
        //return axios.get("/api/heroes")
    },

    getOneData(id){
        console.log('api get one data')
        console.log('hero to fetch' + id)
        return fetch('/api/heroes/'+id)
    }
}