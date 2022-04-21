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