export { };

function Unio(tomb1: number[], tomb2: number[]): number[] {
    let unio: number[] = [];
    for (let i = 0; i < tomb1.length; i++) {
        let szerepelE: boolean = false;
        for (let j = 0; j < unio.length; j++) {
            if (tomb1[i] == unio[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            unio.push(tomb1[i]);
        }
    }
    for (let i = 0; i < tomb2.length; i++) {
        let szerepelE: boolean = false;
        for (let j = 0; j < unio.length; j++) {
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
