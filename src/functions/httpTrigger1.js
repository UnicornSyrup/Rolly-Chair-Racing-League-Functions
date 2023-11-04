const { app } = require('@azure/functions');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
dotenv.config();

const uri = `mongodb+srv://dbUser:${process.env.PASSWORD}@cluster0.isxlqf2.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.http('httpTrigger1', {
    methods: ['GET',],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const name = request.query.get('name') || await request.text() || 'world';

        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            context.log(`WE DATED THE BASE"`);

            name = "BASE DATER";

          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }

        context.log(`Http function processed request for url "${request.url}"`);



        return { body: `Hello, ${name}!` };
    }
});
