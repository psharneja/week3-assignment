//Q10. Write a program which accept average marks of the student achieved in exams and convert them into grade
// and display ratings of each student, grades and ratings can be calculated asper the following table:
/*
Range   	     Grade	Rating
>=0 and <= 60	  F	    Poor
>=61 and <= 70	D	    Fair
>=71 and <= 80	C	    Average
>=81 and <= 90	B	    Good
>=91 and <=100	A	    Excellent
*/

const studentDetails = [
  {name:'David',marks:80},
  {name:'Vinoth',marks:77},
  {name:'Divya',marks:88},
  {name:'Ishitha',marks:95},
  {name:'Thomas',marks:68}
];

let studentsGradeRatingArr = []

//Write your code here
let i = 0;
studentDetails.forEach( function(data){
    switch (true){
            case(data.marks <= 60): studentsGradeRatingArr[i] = data;
                                    studentsGradeRatingArr[i].grade = 'F';
                                    studentsGradeRatingArr[i].rating = 'Poor';
                                    i++;
                                    break;
            case(data.marks <= 70 && data.marks >=61 ): studentsGradeRatingArr[i] = data;
                                    studentsGradeRatingArr[i].grade = 'D';
                                    studentsGradeRatingArr[i].rating = 'Fair';
                                    i++;
                                    break;
            case(data.marks <= 80 && data.marks >= 71 ): studentsGradeRatingArr[i] = data;
                                    studentsGradeRatingArr[i].grade = 'C';
                                    studentsGradeRatingArr[i].rating = 'Average';
                                    i++;
                                    break;
           case(data.marks <= 90 && data.marks >= 81 ): studentsGradeRatingArr[i] = data;
                                    studentsGradeRatingArr[i].grade = 'B';
                                    studentsGradeRatingArr[i].rating = 'Good';
                                    i++;
                                    break;
           case(data.marks <= 100 && data.marks >= 91 ): studentsGradeRatingArr[i] = data;
                                    studentsGradeRatingArr[i].grade = 'A';
                                    studentsGradeRatingArr[i].rating = 'Excellent';
                                    i++;
                                    break;
        default:
            console.log('illuminati');
            break;
            i++;
            
    }
})
//
studentsGradeRatingArr.forEach(function(data){
    delete data.marks;

})

// console.log(studentsGradeRatingArr);
module.exports = studentsGradeRatingArr;
