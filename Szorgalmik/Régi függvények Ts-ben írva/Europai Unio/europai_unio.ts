export { };

const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]
//Unióban lévő országok mennyisége
function TagokSzama(EuropaiUnio): void {
    document.write("Európai Unió országainak száma: " + EuropaiUnio.length);
}

//2007-ben csatlakozott országok mennyisége
function csatlakozott2007(): void {
    let k7: number = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.substr(0, 4) == "2007") {
            k7++;
        }
    }
    document.write("<br>A 2007-ben csatlakozott országok mennyisége: " + k7);
}


//Akármilyen év esetén megmondja a csatlakozók mennyiségét
function adottEvbenCsatlakozott(adottEv: number): number {
    let adottEviCsatlakozok: number = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (Number(EuropaiUnio[i].csatlakozas.substr(0, 4)) == adottEv) {
            adottEviCsatlakozok++;
        }
    }
    return adottEviCsatlakozok;
}

//Csatlakozott-e magyarország és mikor!!!
function csatlakozottEMagyarorszag(): void {
    let csatlakozottE: boolean = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == "Magyarország") {
            document.write("<br>Magyarország csatlakozásának dátuma: " + EuropaiUnio[i].csatlakozas);
            csatlakozottE = true;
        }
    }
    if (csatlakozottE == false) {
        document.write("<br>Magyarország nem csatlakozott az Európai Unióhoz");
    }
}

//Extra:csatlakozott-e bármely ország, igen/nem és mikor!
function orszagCsatlakozas(orszagNeve: string): void {
    let csatlakozottE: boolean = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == orszagNeve) {
            document.write("<br>" + orszagNeve + " csatlakozásának dátuma: " + EuropaiUnio[i].csatlakozas);
            csatlakozottE = true;
        }
    }
    if (csatlakozottE == false) {
        document.write("<br>" + orszagNeve + " nem csatlakozott az Európai Unióhoz");
    }
}

//Májusban volt-e csatlakozas
function MajusiCsatlakozas(): void {
    let voltCsatlakozo: boolean = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(".05.")) {

            voltCsatlakozo = true;
        }
    }
    if (voltCsatlakozo == false) {
        document.write("<br> Májusban nem volt csatlakozás");
    }
    else {
        document.write("<br> Májusban volt csatlakozás");
    }
}

//Adott hónapban volt-e csatlakozas
function AdottHaviCsatlakozas(honapId: number): void {
    let honapAzonosito: string;
    if (honapId < 10) {
        honapAzonosito = ".0" + String(honapId) + ".";
    }
    else {
        honapAzonosito = ".0" + String(honapId) + ".";
    }
    let voltCsatlakozo: boolean = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(honapAzonosito)) {
            voltCsatlakozo = true;
        }
    }
    if (voltCsatlakozo == false) {
        document.write("<br>" + honapId + ". hónapban nem volt csatlakozás");
    }
    else {
        document.write("<br>" + honapId + ". hónapban volt csatlakozás");
    }
}

//Legutoljára csatlakozott ország neve
function LegutolsoCsatlakozo(): string {
    let maxEvIndex: number = 0;
    let ev = "";
    for (let i = 0; i < EuropaiUnio.length; i++) {
        let aktIndexEv: number = Number(EuropaiUnio[i].csatlakozas.substr(0, 4));
        let maxIndexEv: number = Number(EuropaiUnio[maxEvIndex].csatlakozas.substr(0, 4));
        if (aktIndexEv > maxIndexEv) {
            maxEvIndex = i;
            ev = EuropaiUnio[i].csatlakozas;
        }
    }
    return ev;
}

//Csatlakozási statisztika évekre bontva 
//[Adottév] - [csatlakozottszakSzáma]
//[Adottév] - [csatlakozottszakSzáma]
function Statisztika(): void {
    //Évek kigyűjtése egy listában
    let evLista: number[] = [];
    for (let i = 0; i < EuropaiUnio.length; i++) {
        let SzerepelE: boolean = false;
        for (let j = 0; j < evLista.length; j++) {
            if (evLista[j] == Number(EuropaiUnio[i].csatlakozas.substr(0, 4))) {
                SzerepelE = true;
            }
        }
        if (SzerepelE == false) {
            evLista.push(Number(EuropaiUnio[i].csatlakozas.substr(0, 4)));
        }
    }
    evLista.sort();//Ha szerenénk, hogy évszám szerint rendezve legyen az eredmény
    //Évek megszámolása
    //let evListaSeged=new Array(evLista.length);
    let evListaSeged: number[] = [];
    for (let i = 0; i < evLista.length; i++) {
        evListaSeged.push(0);
    }
    for (let i = 0; i < EuropaiUnio.length; i++) {
        for (let j = 0; j < evLista.length; j++) {
            if (evLista[j] == Number(EuropaiUnio[i].csatlakozas.substr(0, 4))) {
                //Itt minek kéne lennie?
                evListaSeged[j]++;
            }
        }
    }
    document.write("<br>Statisztika:<br>");
    for (let i = 0; i < evLista.length; i++) {
        document.write(evLista[i] + ": " + evListaSeged[i] + "<br>");
    }
}

//Évek alatti listazasa
function EvekAlapjanListazas(): void {
    //Évek kigyűjtése egy listában
    let evLista: number[] = [];
    for (let i = 0; i < EuropaiUnio.length; i++) {
        let SzerepelE: boolean = false;
        for (let j = 0; j < evLista.length; j++) {
            if (evLista[j] == Number(EuropaiUnio[i].csatlakozas.substr(0, 4))) {
                SzerepelE = true;
            }
        }
        if (SzerepelE == false) {
            evLista.push(Number(EuropaiUnio[i].csatlakozas.substr(0, 4)));
        }
    }
    evLista.sort();
    for (let i = 0; i < evLista.length; i++) {
        document.write(evLista[i] + ":<br>");
        for (let j = 0; j < EuropaiUnio.length; j++) {
            if (evLista[i] == Number(EuropaiUnio[j].csatlakozas.substr(0, 4))) {
                document.write(EuropaiUnio[j].orszag + "<br>");
            }
        }
    }
}
