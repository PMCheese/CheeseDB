/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const heroes = require('./routes/api/heroes');

app.use('/api/heroes', heroes);


//const port = 5000;

//console.log('api start')

//app.listen(port, () => console.log(`Server started on port ${port}`));
*/
//import mongo from './mongodb';
import {MongoClient, mongoClient} from "mongodb"

const uri = "mongodb+srv://admin:admin123@cheesedb.oeafi.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri)

async function getDBdata(req, res, next){
    const test = client.db('CheeseDB').collection('CheeseDB2');

    const database = await test.find().toArray()

    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(database))
    //console.log(database)
    return database

}

async function getOneDBData(res, heroID){
    const test = client.db('CheeseDB').collection('CheeseDB2');

    const query = {"_id": heroID}

    console.log(query)

    const database = await test.findOne(query)

    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(database))
    console.log(database)
    return database
}

export default function (req, res, next){

    console.log("url: " + req.url)

    if(req.url === '/heroes'){

        const data = getDBdata(req, res, next)
        return;
    }

    else{
        console.log('test for id')
        const heroID = req.url.slice(8)
        console.log(heroID)
        const heroID2 = heroID.replace('%20', ' ')
        console.log("ID: " + heroID2)

        const data = getOneDBData(res, heroID2)
        return
    }

    next()

}