const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'CRUD';

async function dbConnection(){
    let estableConnection = await client.connect();
    let db=estableConnection.db(dbName)
    console.log(`Connected to mangoDB: ${db.databaseName}`);

    return await db.collection('Registration')
    

    //insert data into collections
    // const post=await _collection.insert({ name:"Rohit",Age:20})
    // console.log(`Inserted posts`,post );
}
dbConnection()
module.exports = dbConnection;