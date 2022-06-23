var MongoClient = require('mongodb').MongoClient;
var url = "";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    adatbazis.collection("Fifa").find({ Valtozas: { $in: [0] } }, { projection: { _id: 0, Csapat: 1 } }).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
})