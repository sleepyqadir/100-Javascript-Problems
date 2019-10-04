// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Saif') === 'there,'

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

const longestWord = (words) => {

    // cleaning the array if any extra/special char there
    let arr = words.toLowerCase().match(/[a-z0-9]+/g);

    // returning the longest
    let sortedArray = arr.sort((a,b) => b.length - a.length);

    // check for the longest word
    let longWord = sortedArray.filter((item) =>item.length === sortedArray[0].length);

    if(longWord.length  === 1){
        return longWord[0];
    }
    else{
        return longWord
    }

}

const result = longestWord('Hi this is Saif ur Rehman Rehmann');
console.log(result);