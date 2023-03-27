const coups = 'CFFPCPCCPCPFPFPCPFCCP';

const solution = {
    "P": "F",
    "F": "C",
    "C": "P"
}

const pfc = (str) => {

    let res = "";

    for (const l of coups) {
        res += solution[l];
    }

    return res
}


console.log(pfc(coups));