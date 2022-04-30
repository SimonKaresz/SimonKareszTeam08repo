"use strict";
exports.__esModule = true;
function DiakInfo(nev, csoport, tipus) {
    if (tipus == true) {
        return nev + " [Team0" + csoport + "] -Junior Frontend";
    }
    else if (tipus == false) {
        return nev + " [Team0" + csoport + "] -Webprogramozó";
    }
}
//2.feladat
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Vátozó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else { }
}
//3.feladat
function HarommalOszthatokSzama(vizsgaltTomb) {
    var harommalOszthatok = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatok.push(vizsgaltTomb[i]);
        }
    }
    return harommalOszthatok.length;
}
//4.feladat
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var nyeroszamok = [];
    //Nem saját megoldás
    var i = 0;
    while (i < mennyiseg) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        var szerepelE = false;
        for (var j = 0; j < nyeroszamok.length; j++) {
            if (nyeroszamok[j] == generaltSzam) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            nyeroszamok.push(generaltSzam);
            i++;
        }
    }
    return nyeroszamok;
}
