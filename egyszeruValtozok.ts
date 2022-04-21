//hatáskör változóNév :típus = érték;
var szam: number = 5;
var szoveg: string = "Szeretem a programozást";
var logikai: boolean = false;//vagy true érték lehet

//speciális változók

//:any

var barmi: any = "alma";
barmi = 5;
barmi = true;
document.write(barmi);

//:unknown

var ismeretlen: unknown = "alma";
ismeretlen = 5;
ismeretlen = true;
document.write(String(ismeretlen));


//Tömbök

var szovegesTomb1: string[] = ["alma", "körte", "szilva", "barack"];
var szovegesTomb2: Array<string> = ["fps", "tps", "rts", "szimulátor"];
var szamTomb: Array<number> = [3, 7, 13, 21, 42];

