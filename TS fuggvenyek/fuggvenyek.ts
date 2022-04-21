export { };
//Visszatérési érték és paraméter nélküli eljárás
function IloveTypeScript(): void {
    document.write("Szeretem a TypeScriptet<br>");
}

//Visszatérési érték nélüli és paraméteres eljárás

function NegyzetKeruletTeruletEljaras(a: number): void {
    let kerulet: number = 4 * a;
    let terulet: number = a * a;
    document.write(`A(z)${a} oldalú négyzet kerülete:${kerulet}<br>`);
    document.write(`A(z)${a} oldalú négyzet területe:${terulet}`);
}

//Visszatérési értékes és paraméter nélküli függvény

function RandomGeneralo100Fuggveny(): number {
    return Math.round(Math.random() * 100);
}

//Visszatérési értékes és paraméteres függvény

function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}