export { };

//Feladatok

function TeglalapTeruletKerulet(a: number, b: number): void {
    document.write(`A téglalap területe: ${a * b}`);
    document.write(`<br>A téglalap kerülete: ${(a + b) * 2}`);
}

//PárosE függvény

function ParosE(szam: number): boolean {
    if (szam % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

//Primszám generátor
function PrimSzamGenerator(hatar1: number, hatar2: number): number {
    let also: number;
    let felso: number;
    let generaltSzam;
    if (hatar1 < hatar2) {
        also = hatar1;
        felso = hatar2;
    }
    else {
        also = hatar2;
        felso = hatar1;
    }
    let probalkozasokSzama = 0;
    let sikeresGeneralas = false;
    do {
        let oszto = 0;
        let generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        for (let i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
        return generaltSzam;
    } while (sikeresGeneralas == false && probalkozasokSzama < 100)
    return generaltSzam;

}
//Téglalap terület,kerület Tuple típusú visszatérési értékkel
