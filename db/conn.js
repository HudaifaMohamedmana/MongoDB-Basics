const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config();

const connectionString = process.env.ATLAS_URI || '';
const client = new MongoClient(connectionString);

let conn;
let db;

(async () => {
    try {
        conn = await client.connect();
        db = conn.db('sample_training');
        console.log('Connected to MongoDB');
    } catch (e) {
        console.error('Error connecting to MongoDB:', e);
    }
})();

process.on('SIGINT', async () => {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

module.exports = { db };
