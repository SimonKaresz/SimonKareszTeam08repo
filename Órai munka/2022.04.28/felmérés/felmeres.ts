//Simon Károly #Team08 Junior Frontend
//1.feladat
export { }

function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    if (tipus == true) {
        return nev + " [Team0" + csoport + "] -Junior Frontend";
    }
    else if (tipus == false) {
        return nev + " [Team0" + csoport + "] -Webprogramozó";
    }
}
//2.feladat

function SzovegesErtekeles(jegy: number): [string, string] {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Vátozó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else { }
}

//3.feladat

function HarommalOszthatokSzama(vizsgaltTomb: number[]): number {
    let harommalOszthatok: number[] = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatok.push(vizsgaltTomb[i]);
        }
    }
    return harommalOszthatok.length;
}

//4.feladat

function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): number[] {
    let nyeroszamok: number[] = [];
    //Nem saját megoldás
    let i = 0;
    while (i < mennyiseg) {
        let generaltSzam: number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        let szerepelE: boolean = false;
        for (let j = 0; j < nyeroszamok.length; j++) {
            if (nyeroszamok[j] == generaltSzam) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            nyeroszamok.push(generaltSzam);
            i++;
        }
    }
    return nyeroszamok;
}