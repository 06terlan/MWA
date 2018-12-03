// Retrieve
const MongoClient = require('mongodb').MongoClient;
const connString = "mongodb://localhost:27017/exampleDb";

// Connect to the db
MongoClient.connect(connString, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});