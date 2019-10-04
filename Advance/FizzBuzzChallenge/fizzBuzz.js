/* Write a program to print number from 1 - 100
and on multiple of 3 prints fizz,
 multiple of 5 prints buzz and on both print fizzbuzz */

const fizzbuzz = () => {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log('Fizzzz');
        }
        else if (i % 5 === 0) {s
            console.log('Buzzzzz');
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzzBuzzzz');
        }
        else{
            console.log(i)
        }
    }

}

fizzbuzz();
