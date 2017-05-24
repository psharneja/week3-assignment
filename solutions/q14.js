// Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?

// Write your code here


function pyramid(lines) {
    let stars = "*", spaces = " ";
    console.log(spaces.repeat(lines*2-1) + stars);
    for (i = 1 ; i < lines; i++){
        
        console.log( spaces.repeat((lines*2)-i)+ stars.repeat(i*2));
    }
}

pyramid(20);