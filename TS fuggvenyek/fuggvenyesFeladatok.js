"use strict";
exports.__esModule = true;
//Feladatok
function TeglalapTeruletKerulet(a, b) {
    document.write("A t\u00E9glalap ter\u00FClete: ".concat(a * b));
    document.write("<br>A t\u00E9glalap ker\u00FClete: ".concat((a + b) * 2));
}
//PárosE függvény
function ParosE(szam) {
    if (szam % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
//Primszám generátor
function PrimSzamGenerator(hatar1, hatar2) {
    var also;
    var felso;
    var generaltSzam;
    if (hatar1 < hatar2) {
        also = hatar1;
        felso = hatar2;
    }
    else {
        also = hatar2;
        felso = hatar1;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    do {
        var oszto = 0;
        var generaltSzam_1 = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        for (var i = 1; i <= generaltSzam_1; i++) {
            if (generaltSzam_1 % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
        return generaltSzam_1;
    } while (sikeresGeneralas == false && probalkozasokSzama < 100);
    return generaltSzam;
}
//Téglalap terület,kerület Tuple típusú visszatérési értékkel
