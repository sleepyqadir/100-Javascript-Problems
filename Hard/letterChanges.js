// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

const letterChanges = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;
}

let res = letterChanges('Saif Rehman');
console.log(res);