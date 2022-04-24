export { }

function paroszSzamIntervallumGenerator(also: number, felso: number): number {
    let megvan: boolean = false;
    let generaltSzam: number = 0;
    while (megvan == false) {
        generaltSzam = Math.round(Math.random() * (felso - also)) + also;
        if (generaltSzam % 2 == 0) {
            megvan = true;
        }
    }
    return generaltSzam;
}