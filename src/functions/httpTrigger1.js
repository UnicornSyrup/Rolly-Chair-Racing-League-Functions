/*
const { app } = require('@azure/functions');
const { MongoClient } = require("mongodb");
app.http('httpTrigger1', {
    methods: ['GET',],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const database = await mongoClient.db("cluster0")
        const collection = database.collection("races");

        const results = await collection.find({}).limit(10).toArray();

        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}! ${results.length}` };
    }
});
*/

const { MongoClient } = require("mongodb");
module.exports = async function(context) {
        const database = await mongoClient.db("cluster0")
        const collection = database.collection("races");

        const results = await collection.find({}).limit(10).toArray();

        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}! ${results.length}` };
    };