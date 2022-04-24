export { }
function Kisebb(szam1: number, szam2: number): number {
    if (szam1 < szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}
function Nagyobb(szam1: number, szam2: number): number {
    if (szam1 > szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}

function RandomEgesz(alsoHatar: number, felsoHatar: number): number {
    let generaltSZam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    return generaltSZam;
}

function TombGenerator(meret: number, hatar1: number, hatar2: number) {
    let generaltTomb: number[] = [];
    for (let i = 0; i < meret; i++) {
        generaltTomb.push(RandomEgesz(Kisebb(hatar1, hatar2), Nagyobb(hatar1, hatar2)));
    }
    return generaltTomb;
}

function TombKiiro(kiirandoTomb: number[]) {
    for (let i = 0; i < kiirandoTomb.length; i++) {
        document.write(`<br>A tömb ${i}. indexedik elemének értéke: ${kiirandoTomb[i]}`);
    }
}