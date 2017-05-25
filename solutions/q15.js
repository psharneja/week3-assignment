// Q 15. Consider the following array of objects and solve the problem statements blow:-
// a) Display all objects with occupation as 'Programmer'
// b) Sort the object basis the age key in the descending order
// c) Recreate the above array of objects into the following object of objects :{ 'Developer' : [{'name':_____________, 'age':__________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
// d) Use the map function to create a new array of names present in myObj.
// Expected output:
// [ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]

var myObj = [{
        'name': 'Arun',
        'age': 30,
        'occupation': "Developer"
    },
    {
        'name': 'Ashish',
        'age': 32,
        'occupation': "Developer"
    },
    {
        'name': 'Kalyani',
        'age': 25,
        'occupation': "Programmer"
    },
    {
        'name': 'David',
        'age': 27,
        'occupation': "Programmer"
    },
    {
        'name': 'Priya',
        'age': 22,
        'occupation': "Programmer"
    },
    {
        'name': 'Venkat',
        'age': 28,
        'occupation': "Programmer"
    }];

//Write your code here
let occupationArr=[], a = [], nameArr = [];

//REMOVE DUPLICATES
function removeDuplicates(arr){
    var unique = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
    return unique;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

myObj.forEach(function (data, i) {
    if (data.occupation === 'Programmer') {
        a.push(data);
    }
     occupationArr[i]=data.occupation;
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let compare = function (a, b) {
    return parseInt(b.age) - parseInt(a.age);
}
myObj.sort(compare); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

occupationArr = removeDuplicates(occupationArr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let firstobj = [], secondobj = [];
let j = 0, k = 0;

myObj.forEach(function (data, i) {
    if (data.occupation === 'Developer') {
        firstobj[j] = {
            name: data.name,
            age: data.age
        }
        j++;
    } else if (data.occupation === 'Programmer') {
        secondobj[k] = {
            name: data.name,
            age: data.age
        }
        k++;
    }


})
let newObj = {
    Developer: firstobj,
    Programmer: secondobj
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

myObj.forEach( function (d){
    nameArr.push(d.name);
})

 // Uncomment the below statement - when code is written
module.exports = {
  c: occupationArr,
  d: newObj,
  e: nameArr
};

