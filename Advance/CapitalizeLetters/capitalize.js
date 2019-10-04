const capitalWord = (word) => {

    //===============================================METHOD NUMBER 1============================================//

    // converting it back to array of single word (not single char)
    const arr = word.toLowerCase().split(' ');

    // using loop
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1).toLowerCase();
    // }

    // // converting to string here
    // return arr.join(' ');


    // ============================================METHOD NUMBER 2 ==============================================//


    // return word.
    //     toLowerCase().
    //     split(' ')
    //     .map(item => item[0].toUpperCase() + item.substr(1)).join(' ');
    

}



// call here
const words = capitalWord('my name is saif ur rehmaN');
console.log(words);