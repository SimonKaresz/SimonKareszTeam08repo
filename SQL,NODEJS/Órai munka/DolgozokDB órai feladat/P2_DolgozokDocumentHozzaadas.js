var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SimonKaresz:3HmKzfb7QYTIDb77@cluster0.2luteyc.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var dolgozokUjAdat = {
        nev: 'Szikla Szilárd',
        kor: 60,
        fizetes: 5000000,
        beosztas: 'Tulajdonos'
    }

    adatbazis.collection("Dolgozok").insertOne(dolgozokUjAdat, function (err, res) {
        if (err) throw err;
        console.log("Új adat beillesztve!");
        db.close();
    })
});