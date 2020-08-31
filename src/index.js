const { MongoClient } = require('mongodb');

const add = require('./add');
const sub = require('./sub');
const mul = require('./mul');


const paramA = 10;
const paramB = 20;

console.log(`add: ${add(paramA, paramB)}`);
console.log(`sub: ${sub(paramA, paramB)}`);
console.log(`mul: ${mul(paramA, paramB)}`);

const uri = 'mongodb://127.0.0.1:27017';
const opts = { useUnifiedTopology: true };
const client = new MongoClient(uri, opts);

const run = async() => {
  try {
    await client.connect();
    const db = client.db('test_db');
    const collection = db.collection('test_col');
    const query = { title: 'Forrest gump' };
    await collection.insertOne(query);

    const movie = await collection.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
};

run().catch(console.dir);
