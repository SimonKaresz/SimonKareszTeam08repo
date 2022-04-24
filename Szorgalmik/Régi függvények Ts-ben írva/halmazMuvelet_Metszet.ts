export { };

function Metszet(tomb1: number[], tomb2: number[]): number[] {
    let metszet: number[] = [];
    for (let i = 0; i < tomb1.length; i++) {
        for (let j = 0; j < tomb2.length; j++) {
            if (tomb1[i] == tomb2[j]) {
                let szerepelE: boolean = false;
                for (let k = 0; k < metszet.length; k++) {
                    if (tomb1[i] == metszet[k]) {
                        szerepelE = true;
                    }
                }
                if (szerepelE == false) {
                    metszet.push(tomb1[i]);
                }
            }
        }
    }
    return metszet;
}