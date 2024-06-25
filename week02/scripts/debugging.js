const PI = 3.14;
let radius = 3;
console.log(`Radius1: ${radius}`);
let area = 0;

function circleArea (radius) {
    const area = radius * PI;
    return area;
}

area = circleArea (radius);
console.log(`Area1:${area}`);
radius = 4;
console.log(`Radius2: ${radius}`);
area = circleArea (radius);

console.log(`Area2:${area}`);

