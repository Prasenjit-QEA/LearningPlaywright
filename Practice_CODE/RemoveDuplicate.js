function removeDuplicate(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (result.indexOf(ch) == -1) {
            result += ch;
        }
    }
    return result;
}

//with Set
const removeDuplicate = (str) => [...new Set(str)].join('');
console.log(`Output String is ${removeDuplicate("abra ka dabra")}`);