"use strict";
exports.__esModule = true;
function Metszet(tomb1, tomb2) {
    var metszet = [];
    for (var i = 0; i < tomb1.length; i++) {
        for (var j = 0; j < tomb2.length; j++) {
            if (tomb1[i] == tomb2[j]) {
                var szerepelE = false;
                for (var k = 0; k < metszet.length; k++) {
                    if (tomb1[i] == metszet[k]) {
                        szerepelE = true;
                    }
                }
                if (szerepelE == false) {
                    metszet.push(tomb1[i]);
                }
            }
        }
    }
    return metszet;
}
