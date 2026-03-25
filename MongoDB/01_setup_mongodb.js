const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient("mongodb://127.0.0.1:27017");

  await client.connect();

  const db = client.db("ecommerce");
  const collection = db.collection("product");

  await collection.insertMany([
    { name: "wireless mouse", price: 90, stock: 102 },
    { name: "wireless mouse", price: 90, stock: 102 }
  ]);

  console.log("Data inserted");

  await client.close();
}

run();