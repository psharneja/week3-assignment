//Q13. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax, done){
//Write your code here
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    let i = 2;
    for( i = 2; i < numMax+2 ; i++ ){
        arr[i] = arr[i-1] + arr[i-2];
        
    }
    done(arr)
}
module.exports = fibonacci;
