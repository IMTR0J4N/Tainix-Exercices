const values = [5, 1, 5, 5, 9, 3, 6, 8, 7, 10, 4, 10, 2, 9, 4, 5, 1, 6, 2, 1, 2, 10, 8, 8];

const addition = (arr) => {
    let tmp = 0;

    arr.forEach(n => {
        if (n >= 5) {
            tmp = tmp + n;
        } else { return };
    })

    return tmp
}

console.log(addition(values));