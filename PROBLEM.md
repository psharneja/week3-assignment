## Week 3 Assignment - Exercises

Q1. Write a program to display the current date in the following format mm/dd/yyyy.

Q2. Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?

Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers For example if numbers is *12345648* the output should be *123456-4-8.*

Q4. Write a program to sort an array of numbers in ascending order.
`const myArray = [10,4,7,9,2,3,1,8,6,5];`

Q5. Write a function which takes array as argument and remove duplicates elements and returns a new array.
Test Case - Input:
`[1,1,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];`

Output:

`[1,2,3,4,5,6,7,8,9,10]`

Q6. Write a function to return the difference of the two arrays. (For example :
The two arrays - `[1, 2, 3] [100, 2, 1, 10]` should return `[3,100,10]`
Q7. Write a function to sort the following array of objects by its key value (example key as year)?
Sample object :
```
const library = [
  { film: 'Lagaan', rating: '5', year: 2003},
  { film: 'Bahubali', rating: '4', year: 2015},
  { film: 'Godfather', rating: '4', year: 1990}
];
```
Q8. Write a program which accepts email id as an input, which verified the following rules:-
 - Should contain Uppercase (A-Z) and lowercase (a-z) English letters.
 - Should contain Digits (0-9).
 - Should not contain special characters such as ```! # $ % & ' * + - / = ? ^ ` { | } ~```
 - Can contain character period or dot provided that it is not the first or last character and it will not come one after the other.

Q9. Write a function to return the list of properties (keys) of given object?
Sample object :
```
var employee = {
name : "jameson",
empId : "51907",
age : 30 };
```
Sample Output : `name, empId , age`

Q10. Write a program which accept average marks of the student achieved in exams and convert them into grade and display ratings, grades and display ratings of each student based on Average Grades, grades and ratings can be calculated asper the table (Check the learning platform for details).

Q11. Write a function that can accept a string and return the same after arranging it into alphabetical order.
Example String: 'webmaster'
Expected Output: 'abeemrstw'

Q 12. Write a function that accepts two arguments, first as string and other as a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments: 'gmail.com', 'o'
Expected output: 1
Q 13. Write a program to list (Fibonacci) series till a given number?
Q14.  Write a program to build a (pyramid) of `"*"` for a given number of rows. for example : rows = 6 ?
Q 15. Consider the following array of objects and solve the problem statements below:
```
var myObj =
[{'name':'Arun', 'age': 30, 'occupation': "Developer"},
{'name':'Ashish', 'age': 32, 'occupation': "Developer"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'David', 'age': 27, 'occupation': "Programmer"},
{'name':'Priya', 'age': 22, 'occupation': "Programmer"},
{'name':'Venkat', 'age': 28, 'occupation': "Programmer"}];
```
 1. Display all objects with occupation as 'Programmer'
 2. Sort the object basis the age key in the descending order
 3. Recreate the above array of objects into the following object of objects :{ 'Developer' : `[{'name':_____________, 'age':__________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}`
 4. Use the map function to create a new array of names present in myObj.
Expected output:
`[ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]`

Q 16. Flatten the following object :

`var myObj = [5, [22], [[14]], [[4]],[5,6]]`
Note: the output should be in the form:`[ 5, 22, 14, 4, 5, 6 ]`
