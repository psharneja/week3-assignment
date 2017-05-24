//Q4. Write a program to sort the following array of numbers in ascending order.
// const myArray = [10,4,7,9,2,3,1,8,6,5];

const myArray = [10,4,7,9,2,3,1,8,6,5];

function sortArray(myArray){
//Write your code here
//    let newArray = myArray;
//    for( let i = 0 ; i < newArray.length ; i++ ){
//        for( let j = newArray.length ; j > i ; j-- ){
//            if ( newArray[ j ] < newArray[ j - 1 ] ){
//                temp = newArray[ j ];
//                newArray[ j ] = newArray[ j - 1 ];
//                newArray[ j - 1 ] = temp;
//            }
//            
//        }
//    }
//return newArray;
    
        return myArray.sort(sortNumber);

}
function sortNumber(a, b){
        return  a - b;
    }

module.exports = sortArray;
