import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://admin:admin123@cheesedb.oeafi.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true });

export default client;