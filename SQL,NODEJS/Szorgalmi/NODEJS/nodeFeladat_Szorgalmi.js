var randomSzamFileMuvelet=require('fs');
const { RandomSzam } = require('./nodeFeladatModul_szorgalmi');
let randomSzamokTomb=RandomSzam();
let randomSzamokString=randomSzamokTomb.join();

randomSzamFileMuvelet.appendFile('random20.txt',randomSzamokString,function(error){
    if(error) throw error;
    console.log('Új file létrehozva!');    
});

randomSzamFileMuvelet.writeFile('random20.txt',randomSzamokString,function(error){
    if(error) throw error;
    console.log('Számok kicserélve!');
});