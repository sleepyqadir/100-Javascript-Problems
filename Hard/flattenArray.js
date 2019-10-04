// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]    

const  flattenArray = (arr)=> {
    // SOLUTION 1
    // return arr.reduce((a, b) => a.concat(b));


    // SOLUTION 2
    // return [].concat.apply([], arr);


    // SOLUTION 3
    // return [].concat(...arr);
  }

  let res = flattenArray([[1,3],[4,5],[2],[99,92]]);
  console.log(res)