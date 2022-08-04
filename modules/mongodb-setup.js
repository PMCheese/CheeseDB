import mongo from '../api/routes/api/heroes.js';

export default function(){
    this.nuxt.hook('render:setupMiddleWare', async () => {
        console.log('connecting')
        await mongo.connect()
    })
}