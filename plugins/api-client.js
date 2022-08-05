export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('api', api);
    // For Nuxt <= 2.12, also add 👇
    context.$api = api;
  }

import axios from 'axios'

const api = {
    getData() {
        //return fetch('http:0.0.0.0:5000/api/heroes');
        return axios.get("/api/heroes")
    }
}