const maxChar = (word) => {
    const obj = {};
    let maxNum = 0;
    let maxChar = '';
    

    word.split('').forEach((item)=>{
        if(obj[item]){
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    });

    // return obj;
    for(let data in obj){
        if(obj[data] > maxNum){
            maxNum = obj[data];
            maxChar = data;
        }

    }
    return `The Max letter is "${maxChar}" and it occurs "${maxNum}" times`;


}

// call here
const data = maxChar('javaScript');
console.log(data);