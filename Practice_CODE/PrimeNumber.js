function primeNumberCheck(Number) {
    if (Number <= 1) {
        console.log(`invalid imput`);
    }
    else if (Number == 2 || Number == 3) {
        console.log(`${Number} is prime`);
    }
    for (let i = 2; i <= Math.sqrt(Number); i++) {
        if (Number % i == 0) {
            return false;
        }
    }
    return true;

}

console.log(`Given Number is Prime : ${primeNumberCheck(10)}`);
console.log(`Given Number is Prime : ${primeNumberCheck(27)}`);