const side = 34;

const areaAndPerimeter = (sd) => {
    let area = sd * sd;
    let perimeters = sd * 4;
    
    return area + perimeters
}

console.log(areaAndPerimeter(side));