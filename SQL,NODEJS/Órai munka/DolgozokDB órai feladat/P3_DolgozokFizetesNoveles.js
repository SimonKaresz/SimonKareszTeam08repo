var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SimonKaresz:3HmKzfb7QYTIDb77@cluster0.2luteyc.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var modositando = { beosztas: "Marketing Manager" };
    adatbazis.collection("Dolgozok").updateOne(modositando, { $set: { fizetes: 1000000 } }, function (err, res) {
        if (err) throw err;
        console.log("Dolgozó adata módosítva lett!");
        db.close();
    })
})