// add all the numbers
// function addNum() {

//     // converting in array
//     let arr = Array.prototype.slice.call(arguments)
    
//     // total num
//     var total = 0;

//     for(i=0 ; i< arr.length ; i ++){
//         total += arr[i]
//     }
//     return total;

// }

function addNum(...num) {

    var total =0;
    num.forEach((item) => total += item);
    return total 

}
const res = addNum(1,4,2,1);
console.log(res)