//Q16. Flatten the following object :

const arr = [5, [22], [[14]], [[4]],[5,6]];
const temp = [];

function flatten(arrArg) {
  //Write your code here
//  let len = arrArg.length;
//    for( i =0; i<len; i++){
//        temp[i] = arrArg[i];
//        temp.forEach(function(d, i){
//            console.log(d);
//        })
//        console.log(temp);
//    }
//}

return arrArg.reduce((a,b)=>a.concat(Array.isArray(b)? flatten(b):b),[]);
}


const newArr = flatten(arr);

module.exports = newArr;
