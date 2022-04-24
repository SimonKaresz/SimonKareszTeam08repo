"use strict";
exports.__esModule = true;
function KetTombInverz(tomb1, tomb2) {
    var inverz = [];
    for (var i = 0; i < tomb1.length; i++) {
        var egyezikE = false;
        for (var j = 0; j < inverz.length; j++) {
            if (tomb1[i] == inverz[j]) {
                egyezikE = true;
            }
        }
        if (egyezikE == false) {
            var szerepelE = false;
            for (var k = 0; k < tomb2.length; k++) {
                if (tomb1[i] == tomb2[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                inverz.push(tomb1[i]);
            }
        }
    }
    for (var i = 0; i < tomb2.length; i++) {
        var egyezikE = false;
        for (var j = 0; j < inverz.length; j++) {
            if (tomb2[i] == inverz[j]) {
                egyezikE = true;
            }
        }
        if (egyezikE == false) {
            var szerepelE = false;
            for (var k = 0; k < tomb1.length; k++) {
                if (tomb2[i] == tomb1[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                inverz.push(tomb2[i]);
            }
        }
    }
    return inverz;
}
