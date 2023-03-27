const joueurs = [49, 53, 31, 52, 30, 33, 36, 35, 16, 38, 8, 54, 23, 24, 56, 21, 41, 6, 34, 1, 22, 9, 42, 25, 60, 19, 45, 26, 37, 40, 18];

const compose = (arr) => {
    let tmp = arr.map(n => { return n.toString() }).sort((a, b) => b - a);
    
    let res = "";

    for (let i = 0, l = 10; i <= l; i++) {
        res += `${i === 0 ? " " : "-"}${joueurs.findIndex(el => el === parseInt(tmp[i]))}`
    }
    
    return res
}

console.log(compose(joueurs));