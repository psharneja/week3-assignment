//Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?

function highestAndLowest(numbers){
// Write your code here
    numbers = numbers.split(" ");
    return Math.max(...numbers) +" "+ Math.min(...numbers);
}
module.exports = highestAndLowest;
//console.log(highestAndLowest("4 5 2 3 7 6 5"));
