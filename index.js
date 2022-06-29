const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Look Mama I am working with node');
});

const users = [
    {name: "Mandal", age: 23, profession:"Job"},
    {name: "TTCM", age: 33, profession:"Fitfat"},
    {name: "Ranjit K Mandal", age: 43, profession:"Business"}
]

app.get('/users', (req, res)=>{
    res.send(users);
});

// id	users  pass	    4p0QpTLyFR33djF0

const uri = "mongodb+srv://users:4p0QpTLyFR33djF0@cluster0.kwdbbxh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// async function structure
async function run(){

}
run().catch(console.dir);

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log('connect to db');
//   client.close();
// });

// Query example
app.get('/products/', async(req, res)=>{
    const {name, address} = req.query; // Object distuctaring শুধু অবজেক্ট পাওয়া যাবে
    // const id = req.params; // object আকারে পাওয়া যাবে
    console.log(name);
    console.log(address);
    res.send(name);
});

// params
app.get('/products/:id', async(req, res)=>{
    const {id} = req.params; // Object distuctaring শুধু অবজেক্ট পাওয়া যাবে
    // const id = req.params; // object আকারে পাওয়া যাবে
    console.log(id);
    res.send(id);
});

app.listen(port, ()=>{
    console.log('Listening to port', port);
})