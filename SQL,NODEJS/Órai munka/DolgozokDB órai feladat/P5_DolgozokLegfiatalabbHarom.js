var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SimonKaresz:3HmKzfb7QYTIDb77@cluster0.2luteyc.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var korNovekvo = { kor: 1 };
    adatbazis.collection("Dolgozok").find().sort(korNovekvo).limit(3).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});