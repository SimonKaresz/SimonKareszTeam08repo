//hatáskör változóNév :típus = érték;
var szam = 5;
var szoveg = "Szeretem a programozást";
var logikai = false; //vagy true érték lehet
//speciális változók
//:any
var barmi = "alma";
barmi = 5;
barmi = true;
document.write(barmi);
//:unknown
var ismeretlen = "alma";
ismeretlen = 5;
ismeretlen = true;
document.write(String(ismeretlen));
//Tömbök
var szovegesTomb1 = ["alma", "körte", "szilva", "barack"];
var szovegesTomb2 = ["fps", "tps", "rts", "szimulátor"];
var szamTomb = [3, 7, 13, 21, 42];
//Feladat
var szam1 = 10;
var szam2 = 5;
var kerulet = (szam1 + szam2) * 2;
var terulet = szam1 * szam2;
console.log("A téglalap kerülete:" + kerulet);
console.log("A téglalap területe:" + terulet);
