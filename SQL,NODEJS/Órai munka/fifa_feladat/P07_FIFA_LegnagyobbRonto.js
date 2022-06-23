var MongoClient = require('mongodb').MongoClient;
var url = "";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var sorrend = { Valtozas: -1 };
    adatbazis.collection("Fifa").find({}, { projection: { _id: 0, Csapat: 1, Valtozas: 1 } }).sort(sorrend).limit(1).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
})