var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SimonKaresz:3HmKzfb7QYTIDb77@cluster0.2luteyc.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var dolgozokAdatok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
    ]
    adatbazis.collection("Dolgozok").insertMany(dolgozokAdatok, function (err, res) {
        if (err) throw err;
        console.log("Dolgozó adatok feltöltve!");
        db.close();
    })
});