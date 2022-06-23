var MongoClient = require('mongodb').MongoClient;
var url = "";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var sorrend = { Pontszam: -1 };
    adatbazis.collection("Fifa").find({}, { projection: { _id: 0, Csapat: 1, Helyezes: 1 } }).sort(sorrend).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
})