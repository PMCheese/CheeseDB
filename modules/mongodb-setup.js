import mongo from '../api/mongodb.js';

export default function(){
    this.nuxt.hook('render:setupMiddleWare', async () => {
        console.log('connecting')
        await mongo.connect()
    })
}