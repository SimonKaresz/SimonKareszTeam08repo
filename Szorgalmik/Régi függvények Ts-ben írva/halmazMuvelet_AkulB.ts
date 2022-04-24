export { };

function AKulonbsegB(tomb1: number[], tomb2: number[]): number[] {
    let aKulB: number[] = [];
    for (let i = 0; i < tomb1.length; i++) {
        let egyezikE: boolean = false;
        for (let j = 0; j < tomb2.length; j++) {
            if (tomb1[i] == tomb2[j]) {
                egyezikE = true;
            }
        }
        if (egyezikE == false) {
            let szerepelE: boolean = false;
            for (let k = 0; k < aKulB.length; k++) {
                if (tomb1[i] == aKulB[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                aKulB.push(tomb1[i]);
            }
        }
    }
    return aKulB;
}