const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();



router.get('/', async (req, res) => {
    //const heroes = await loadHeroesCollection();
    //res.send(await heroes.find({}).toArray());
});

const uri = "mongodb+srv://admin:admin123@cheesedb.oeafi.mongodb.net/?retryWrites=true&w=majority";

async function loadHeroesCollection(){

    const client = await mongodb.MongoClient.connect(uri, {useNewUrlParser:true});

    return client.db('CheeseDB').collection('CheeseDB');
}

module.exports = router;