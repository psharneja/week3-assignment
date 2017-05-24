//Q9. Write a function to return the list of properties (keys) of given object?

//Write your code here
const library= { film: 'Lagaan', rating: '5', year: 2003 };

function arraykeys(library) {
    for ( var property in library ) {
        console.log(property);
    
    }
}

 module.exports = arraykeys;
