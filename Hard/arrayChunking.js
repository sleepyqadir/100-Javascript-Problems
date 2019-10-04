// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

const chunkArray= (arr, len) => {

    // Init chunked arr
    const chunkedArr = [];
    // Set index
    let i = 0;
  
    // Loop while index is less than the array length
    while (i < arr.length) {
        
      // Slice out from the index to the index + the chunk length nd push on to the chunked array
      chunkedArr.push(arr.slice(i, i + len));
      // Increment by chunk length
      i += len;
    }
  
    return chunkedArr;
}
const res = chunkArray([1,4,5,1,3,2,'d',2] , 2);
console.log(res);