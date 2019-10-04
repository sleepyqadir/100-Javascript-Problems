// function here
const reverseNumber = (num) => {

    let rev = num.toString().split('').reverse().join('');

    return parseInt(rev) * Math.sign(num);


}

// call here
const number = reverseNumber(-12345);
console.log(number);