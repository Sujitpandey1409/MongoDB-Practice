
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sujitpandey1409:UvxtvWriwc1Aeqer@cluster0.pgroq1o.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// module.exports = async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch(e) {
//     // Ensures that the client will close when you finish/error
//     console.log(e);
//   }
// }
// run().catch(console.dir);

const mongoose = require('mongoose')

module.exports = async ()=>{
    const url =  "mongodb+srv://sujitpandey1409:UvxtvWriwc1Aeqer@cluster0.pgroq1o.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(url,{
            useNewUrlParser: true, // default recommended options
            useUnifiedTopology: true,
        })
        console.log('mongodb connected using mongoose');
    } catch (error) {
        console.log(error);
    }
    
}
