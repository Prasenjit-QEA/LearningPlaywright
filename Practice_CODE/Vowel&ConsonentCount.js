let str = "what ever you wantTTTT";

function countVowelandConsonet(givenString) {
    str.toLowerCase();
    let Vcount = 0;
    let Ccount = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            Vcount++;
        }
        else {
            Ccount++;
        }
    }
    console.log(`Vowel present in given String are :  ${Vcount}`);
    console.log(`Vowel present in given String are :  ${Ccount}`);
}

countVowelandConsonet(str);