// Q 15. Consider the following array of objects and solve the problem statements blow:-
// a) Display all objects with occupation as 'Programmer'
// b) Sort the object basis the age key in the descending order
// c) Recreate the above array of objects into the following object of objects :{ 'Developer' : [{'name':_____________, 'age':__________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
// d) Use the map function to create a new array of names present in myObj.
// Expected output:
// [ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]

var myObj =[{'name':'Arun', 'age': 30, 'occupation': "Developer"},
{'name':'Ashish', 'age': 32, 'occupation': "Developer"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'David', 'age': 27, 'occupation': "Programmer"},
{'name':'Priya', 'age': 22, 'occupation': "Programmer"},
{'name':'Venkat', 'age': 28, 'occupation': "Programmer"}];

//Write your code here
let arrayOccup=[];
let occupationArr = {};
// comparison function
let compare = function(a, b){
    return parseInt(b.age) - parseInt(a.age);
}
// duplicate removal
function removeDuplicates(arr){
  //Write your code here
    var unique = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
    return unique;
}



// part a
console.log("PART A");
myObj.forEach(function(data, i){
    if(data.occupation === 'Programmer'){
        console.log(data);
    }
    arrayOccup[i]=data.occupation;
})

// part b
console.log("PART B");
myObj.sort(compare);
console.log(myObj);

// part c
console.log("PART C");
arrayOccup = removeDuplicates(arrayOccup);
console.log(arrayOccup);
//
//myObj.forEach( function (data, i){
//    if(data.occupation in occupationArr){
//        namer = data.occupation;
//        occupationArr[namer].name = data.name ;
//        occupationArr[namer].age = data.age;
//    } else {
//        occupationArr[data.occupation] = {
//            name: data.name,
//            age: data.age
//        };
//    }
//})
//console.log(occupationArr);
let y = {};
myObj.forEach(obj => {
  Object.keys(obj).forEach(key => {
    y[key] = (y[key] || []).concat([obj[key]]);
  });
});
console.log(y);


/* Uncomment the below statement - when code is written
module.exports = {
  c: occupationArr,
  d: newObj,
  e: nameArr
};
*/
