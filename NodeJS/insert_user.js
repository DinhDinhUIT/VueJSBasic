var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodejs");
  var myobj = { first_name: "Tran", last_name: "Dinh", email: 'dinh@gmail.com', password: '123' };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});