let a = 100;
let b = 10;
let c = 12;

identifyTriangle(a, b, c);

function identifyTriangle(a, b, c) {
    if (a === b && a === c && b === c) {
        console.log("This is a equilateral");
    }
    else if (a === b || a === c || b === c) {
        console.log("This is a isosceles");
    }
    else {
        console.log("This is a scalene");
    }
}