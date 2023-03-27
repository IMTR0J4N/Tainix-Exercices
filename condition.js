const number = 2352;

const is3Multiple = (n) => {
    if (n % 3 === 0) {
        return "YES";
    } else {
        return "NO";
    };
};

console.log(is3Multiple(number));