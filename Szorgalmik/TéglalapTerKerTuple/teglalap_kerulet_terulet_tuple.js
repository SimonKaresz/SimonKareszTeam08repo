"use strict";
exports.__esModule = true;
//Téglalap terület,kerület Tuple típusú visszatérési értékkel
function TeglalapTeruletKerulet(a, b) {
    var kerulet = (a + b) * 2;
    var terulet = a * b;
    return [kerulet, terulet];
}
