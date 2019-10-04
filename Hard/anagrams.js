// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

const isAnagram = (str1, str2) => {
    return formatStr(str1) === formatStr(str2);
  }


//function to remove special char and sort to match the strings
let formatStr =(str) => {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
  
  
const res = isAnagram('Inch' , 'Chin');
console.log(res)