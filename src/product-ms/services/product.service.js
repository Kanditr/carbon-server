let products = [
  {
    id: 1,
    summmary: "productA",
    price: { value: 12, variation: "white" },
    description: "the best product in the shop",
    rating: 5,
    feature: ["clean", "clear"],
    care: ["easy clean", "easy care"],
    shipping: "free shipping",
    returns: "free return within 30 day of purchase",
  },
  {
    id: 2,
    summmary: "productB",
    price: { value: 18, variation: "white" },
    description: "the best product in the shop",
    rating: 4.8,
    feature: ["clean", "clear"],
    care: ["easy clean", "easy care"],
    shipping: "free shipping",
    returns: "free return within 30 day of purchase",
  },
];

// Mock - get all products
const getProducts = () => {
  return products;

  // mock error
  const error = new Error("not_found");
  error.statusCode = 404;
  error.code = "not_found";
  throw error;
};

// Mongo connection
const { MongoClient } = require("mongodb");
const url = `${process.env.DB_CONNECTION}`;
const dbName = "market";
const collectionName = "product";

// get all products
async function getAllProducts() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected correctly to mongo server");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    return result;
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}

// get one product by id
async function getOneProduct(id) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected correctly to mongo server");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.findOne({ _id: id });
    return result;
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}

module.exports = { getProducts, getOneProduct, getAllProducts };
