"use strict";
exports.__esModule = true;
function Kisebb(szam1, szam2) {
    if (szam1 < szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}
function Nagyobb(szam1, szam2) {
    if (szam1 > szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}
function RandomEgesz(alsoHatar, felsoHatar) {
    var generaltSZam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    return generaltSZam;
}
function TombGenerator(meret, hatar1, hatar2) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(RandomEgesz(Kisebb(hatar1, hatar2), Nagyobb(hatar1, hatar2)));
    }
    return generaltTomb;
}
function TombKiiro(kiirandoTomb) {
    for (var i = 0; i < kiirandoTomb.length; i++) {
        document.write("<br>A t\u00F6mb ".concat(i, ". indexedik elem\u00E9nek \u00E9rt\u00E9ke: ").concat(kiirandoTomb[i]));
    }
}
