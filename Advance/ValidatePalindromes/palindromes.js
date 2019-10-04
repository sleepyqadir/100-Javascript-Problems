const checkPalindrome = (str) => {

    let rev = '';

     str.split('').forEach((item) => rev = item + rev);

     return rev === str;

}

// fucntion call here
let word = checkPalindrome('madam');
console.log(word)