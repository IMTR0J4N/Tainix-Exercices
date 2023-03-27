const stop = 70;

const toStop = (stopN) => {
    let res = 0;

    for (let i = 0; i < stopN; i++) {
        res = res + i        
    }

    return res
}

console.log(toStop(stop));