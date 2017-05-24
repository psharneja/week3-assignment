// 6. Write a function to find the difference of two arrays?
function difference(arr1, arr2) {
// Write your code here
    let first = arr2.filter(x => arr1.indexOf(x) < 0 );
    let second = arr1.filter(x => arr2.indexOf(x) < 0);
    return second.concat(first);
}

 module.exports = difference;
