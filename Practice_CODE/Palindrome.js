function palindromeCheck(Str) {
    Str.toLowerCase();
    let str = Str.split('').reverse().join('');
    if (Str === str) {
        console.log("This is a Palindrom!");
    }
    else {
        console.log("This is not a Palindrome!")
    }
}

palindromeCheck("TNTNT");