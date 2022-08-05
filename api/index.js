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
    const test = client.db('CheeseDB').collection('CheeseDB');

    const database = await test.find().toArray()

    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(database))
    //console.log(database)
    return database

}

export default function (req, res, next){

    console.log(req.url)

    if(req.url === '/heroes'){

        const data = getDBdata(req, res, next)

        console.log(data)
        
        
        return;
    }

    next()

}