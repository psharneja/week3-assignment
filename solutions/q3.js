//Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers
//For example if numbers is 12345648 the output should be 123456-4-8.
let nums = "12345648";
module.exports = function(nums,out){

  // Write your code here
    let result = nums.split('');
    let len = result.length;
    for( let i = 1; i < len ; i++ ){
            if(((result[i]%2) === 0) && ((result[i-1]%2) === 0)){
                result.splice(i,0,'-');
                i++;
                len++;  
            }

    }
    out(result.join(''));
  }
