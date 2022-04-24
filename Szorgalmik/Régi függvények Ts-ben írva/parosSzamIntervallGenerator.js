"use strict";
exports.__esModule = true;
//Páros Szám intervallum generátor 
function paroszSzamIntervallumGenerator(also, felso) {
    var megvan = false;
    var generaltSzam = 0;
    while (megvan == false) {
        generaltSzam = Math.round(Math.random() * (felso - also)) + also;
        if (generaltSzam % 2 == 0) {
            megvan = true;
        }
    }
    return generaltSzam;
}
