//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

function checkdata(out){
  //Write your code here
var date=new Date();
  var d=date.getDate();
  var m=date.getMonth();
  var y=date.getFullYear();
  out(m+"/"+d+"/"+y);
}

module.exports = checkdata;
