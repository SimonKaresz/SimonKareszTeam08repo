export { };

//Téglalap terület,kerület Tuple típusú visszatérési értékkel

function TeglalapTeruletKerulet(a: number, b: number): [number, number] {
    let kerulet = (a + b) * 2;
    let terulet = a * b;
    return [kerulet, terulet];
}