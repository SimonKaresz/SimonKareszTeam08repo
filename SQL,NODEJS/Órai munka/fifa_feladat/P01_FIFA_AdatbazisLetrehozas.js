var MongoClient = require('mongodb').MongoClient;
var url = "";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    adatbazis.createCollection("Fifa", function (err, res) {
        if (err) throw err;
        console.log("Fifa adatbázis létrehozva!");
        db.close();
    })
})