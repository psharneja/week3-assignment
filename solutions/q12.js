//Q12. Write a function that accepts two arguments, first as string and other as a letter and the function will count the number of occurrences of the specified letter within the string.
/* Sample arguments: 'gmail.com', 'o'
Expected output: 1
*/

function char_count(str, letter){
//Write your code here
    str = str.split('');
    let counter = 0;
    str.forEach(function(data, i){
        if (str[i] === letter) counter++;
    })
    return counter;
}


module.exports = char_count;
