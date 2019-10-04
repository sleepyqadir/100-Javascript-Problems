// sum all the prime numbers here
const sumPrime = (num) => {
    let total = 0;

    function checkForPrime(i) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          return false;
        }
      }
      return true;
    }
  
    for (let i = 2; i <= num; i++) {
      if (checkForPrime(i)) {
        total += i;
      }
    }
    return total;

}
const res = sumPrime(10);
console.log(res);