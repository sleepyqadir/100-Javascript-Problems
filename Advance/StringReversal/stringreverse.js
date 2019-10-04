// function def here
const reverseString = (str) => {

    //======================================== METHOD NUMBER 1 ===================================================//
    /* first split every single word  into array here
     then reverse and join again into string*/



    // return str.split('').reverse().join('');

    ////////////////////////////////////////////////////////////
    //======================================== METHOD NUMBER 2 ===================================================//


    // let reverse = ''
    // for(i=str.length-1 ; i >=0 ; i --){
    //     reverse += str[i];
    // }
    // return reverse;

    ////////////////////////////////////////////////////////////
    //======================================== METHOD NUMBER 3 ===================================================//



    //  let reverse = ''
    // for(i=0 ; i <=str.length -1 ; i++){
    //     reverse = str[i] + reverse
    // }
    // return reverse;

    /////////////////////////////////////////////////////////////
    //======================================== METHOD NUMBER 4 ===================================================//



    //    let reverse = ''
    // for(let word of str){
    //     reverse = word + reverse
    // }
    // return reverse;

    
    /////////////////////////////////////////////////////////////
    //======================================== METHOD NUMBER 5 ===================================================//



    // let reverse = '';

    // // first we convert the string into array inorder to use array methods    
    // str.split('').forEach((item) => reverse = item + reverse)

    // return reverse;

    ////////////////////////////////////////////////////////////////
    //======================================== METHOD NUMBER 1 ===================================================//


    // return str.split('').reduce((item, rev) => rev + item, '');
}


// function call here
let word = reverseString('Hello World');
console.log(word);