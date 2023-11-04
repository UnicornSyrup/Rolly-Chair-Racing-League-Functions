const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET',],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // const { MongoClient } = require("mongodb");
        
        // let uri = `mongodb+srv://dbUser:${process.env.MONGO_PASSWORD}@cluster0.isxlqf2.mongodb.net/?retryWrites=true&w=majority`;
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version

        /*
        let client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
        });

        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            // await client.db("admin").command({ ping: 1 });
            // console.log("Pinged your deployment. You successfully connected to MongoDB!");

            const database = await client.db("cluster0")
            const collection = await database.collection("races");

            const results = await collection.find({}).limit(10).toArray();
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }

        */
        
        

        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}! ${results.length}` };
    }
});