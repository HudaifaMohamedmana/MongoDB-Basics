const { MongoClient } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.ATLAS_URI || '';
const client = new MongoClient(connectionString);

let db;

const dbconnect = async () => {
    try {
        await client.connect();
        db = client.db('sample_training');
        console.log('Connected to MongoDB');
        return db;
    } catch (e) {
        console.error('Error connecting to MongoDB:', e);
    }
};

module.exports = dbconnect;
