fifa = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639",
]

function ObjektumFeltolto(feltoltendoAdatok) {
    const Adatok = [];
    for (let i = 0; i < feltoltendoAdatok.length; i++) {
        let daraboltSor = feltoltendoAdatok[i].split(";");

        const FifaAdatok =
        {
            Csapat: daraboltSor[0],
            Helyezes: Number(daraboltSor[1]),
            Valtozas: Number(daraboltSor[2]),
            Pontszam: Number(daraboltSor[3])
        };
        Adatok.push(FifaAdatok);
    }
    return Adatok;
}

var MongoClient = require('mongodb').MongoClient;
var url = "";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    var FifaAdatok = ObjektumFeltolto(fifa);
    adatbazis.collection("Fifa").insertMany(FifaAdatok, function (err, res) {
        if (err) throw err;
        console.log("Új adatok feltöltve a Fifa adatbázisba!");
        db.close();
    });
});