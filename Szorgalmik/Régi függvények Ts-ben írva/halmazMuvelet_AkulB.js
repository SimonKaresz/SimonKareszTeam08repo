"use strict";
exports.__esModule = true;
function AKulonbsegB(tomb1, tomb2) {
    var aKulB = [];
    for (var i = 0; i < tomb1.length; i++) {
        var egyezikE = false;
        for (var j = 0; j < tomb2.length; j++) {
            if (tomb1[i] == tomb2[j]) {
                egyezikE = true;
            }
        }
        if (egyezikE == false) {
            var szerepelE = false;
            for (var k = 0; k < aKulB.length; k++) {
                if (tomb1[i] == aKulB[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                aKulB.push(tomb1[i]);
            }
        }
    }
    return aKulB;
}
