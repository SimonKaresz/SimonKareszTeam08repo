var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SimonKaresz:3HmKzfb7QYTIDb77@cluster0.2luteyc.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    adatbazis.createCollection("Dolgozok", function (err, res) {
        if (err) throw err;
        console.log("Sikeres adatbázis művelet:Dolgozok kollekció létrehozva!");
        db.close();
    })
})