"use strict";
exports.__esModule = true;
function Unio(tomb1, tomb2) {
    var unio = [];
    for (var i = 0; i < tomb1.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < unio.length; j++) {
            if (tomb1[i] == unio[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            unio.push(tomb1[i]);
        }
    }
    for (var i = 0; i < tomb2.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < unio.length; j++) {
            if (tomb2[i] == unio[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            unio.push(tomb2[i]);
        }
    }
    return unio;
}
