const express = require("express");
const app = express();

// Body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Mongo connection
const { MongoClient } = require("mongodb");
const uri = `${process.env.DB_CONNECTION}`;

// Test endpoint
app.get("/test", (request, response) => {
  response.send("Hi there");
});

// Test endpoint
app.get("/try", (request, response) => {
  response.send("Hi Gun");
});

// Create market item
app.post("/market/item", async (request, response) => {
  // TO DO: add body validation
  // TO DO: add error log when fail to create item in database
  const item = request.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db("test").collection("Product").insertOne({
    name: item.name,
  });
  await client.close();

  response
    .status(200)
    .send({ status: "ok", message: `item name ${item.name} is added!` });
});

// Get all market item
app.get("/market/item", async (request, response) => {
  // TO DO: add body validation
  // TO DO: add error log when fail to retrieve item from database
  const client = new MongoClient(uri);
  await client.connect();
  const items = await client
    .db("test")
    .collection("Product")
    .find({})
    .toArray();
  await client.close();

  response.status(200).send(items);
});

// Port connection
app.listen(3001, () => {
  console.log("Listen on the port 3001...");
});
