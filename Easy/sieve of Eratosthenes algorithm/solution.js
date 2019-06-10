function sieve(limit) {
 
  var bools = [];
  var primes = [];

  /* generate a list of booleans all set to true initially the array is indexed from 2 to limit representing all numbers
    e.g. [true, true, true, true] = [2, 3, 4, 5] */
  for (var i = 1; i < limit; i++) { bools.push(true); } 

  for (var i = 2; i < limit; i++) { // we start from 2 because we know 1 is not a prime number
    if (bools[i-2]) {
      for (var j = i*2; j <= limit; j += i) {
        bools[j-2] = false;    
      }
    }
  }
  
  /* now generate the list of primes only where there is a true value in the bools array */
  for (var p = 0; p < bools.length; p++) {
    if (bools[p]) { primes.push(p+2); }
  }
  return primes;
} 

sieve(30);