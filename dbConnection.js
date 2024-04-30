const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sireesha2622:Siri12345@cluster0.ekefhyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1, strict: true, deprecationErrors: true,
    } 
});

client.connect();

module.exports = client;