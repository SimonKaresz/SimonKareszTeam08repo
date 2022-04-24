export { };

function KetTombInverz(tomb1: number[], tomb2: number[]): number[] {
    let inverz: number[] = [];
    for (let i = 0; i < tomb1.length; i++) {
        let egyezikE: boolean = false;
        for (let j = 0; j < inverz.length; j++) {
            if (tomb1[i] == inverz[j]) {
                egyezikE = true;
            }
        }
        if (egyezikE == false) {
            let szerepelE: boolean = false;
            for (let k = 0; k < tomb2.length; k++) {
                if (tomb1[i] == tomb2[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                inverz.push(tomb1[i]);
            }
        }
    }
    for (let i = 0; i < tomb2.length; i++) {
        let egyezikE = false;
        for (let j = 0; j < inverz.length; j++) {
            if (tomb2[i] == inverz[j]) {
                egyezikE = true;
            }
        }
        if (egyezikE == false) {
            let szerepelE = false;
            for (let k = 0; k < tomb1.length; k++) {
                if (tomb2[i] == tomb1[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                inverz.push(tomb2[i]);
            }
        }
    }
    return inverz;
}