var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SimonKaresz:3HmKzfb7QYTIDb77@cluster0.2luteyc.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var sorrend = { fizetes: -1 };
    //1 esetén a sorrend növekvő ASC
    //-1 esetén a sorrend csökkenő DESC
    adatbazis.collection("Dolgozok").find().sort(sorrend).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
})