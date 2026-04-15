
function isPrime(number) {
    if (number <= 1) {
        console.log(number + " is not a Prime Number");
        return;
    }
    if (number <= 3) {
        console.log(number + " is a Prime Number");
        return;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        console.log(number + " is not a Prime Number");
        return;
    }
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            console.log(number + " is not a Prime Number");
            return;
        }
    }
    console.log(number + " is a Prime Number");
}

isPrime(237);
