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
