// 1️⃣ Print "Hello" 5 times
for (let i = 0; i < 5; i++) {
    console.log(i + "=>Hello");
}

// 2️⃣  Print numbers from 1 to 10
for (let j = 1; j <= 10; j++) {
    console.log(j);
}

// 3️⃣ Print even numbers from 1 to 20

console.log("Even number form 1 to 20 is :");
for (let k = 2; k <= 20; k += 2) {
    console.log(k);
}

// 4️⃣ Print the sum of first 10 natural numbers
console.log("Sum for first 10 natural numbers");
let sum = 0;
for (let l = 1; l <= 10; l++) {
    sum = sum + l;
}
console.log(sum);

// 5️⃣ Print the multiplication table of 5
console.log("Multiplication table of 5");
for (let m = 1; m <= 10; m++) {
    console.log("5 X " + m + " = " + 5 * m);
}
