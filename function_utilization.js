const values = [74, 45, 25, 95, 14, 30, 79, 82, 94, 36, 16, 12, 36, 13, 55, 35, 17, 89, 86, 50, 36, 95, 48, 33, 10, 30];

const is3Multiple = (arr) => {
    const tmp = arr.filter(v => {
        if (v % 3 === 0) {
            return v
        }
    });

    return tmp.join("-");
}   

console.log(is3Multiple(values));