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
    for (var i = 0; i < mennyiseg; i++) {
    }
    return nyeroszamok;
}
