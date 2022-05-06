// Variable type
/*  Primitive data
    number 
    string
    boolean
    undefined
    null
    symbol 
*/
/*  Complex data
    function
    object
*/

// Number type
var a = 1;
var b = 1.5;

// String type
var fullName = 'Javascript F8';

// Boolean type
var isStatus = true;

// Undefine type;
var age;

// Null type
var isNull = null; // nothing

// Symbol
var id = Symbol('id');

// Function
var myFunction = function() {
    console.log("Function type, complex data");
}
// myFunction();

// Object type: Object & Array
var myObject = {
    name: 'Javascript',
    year: 1999,
    address: 'HCM',
    myFunction: function () {

    }
};
// console.log('myObject', myObject)

var myArray = ['JS',' Java', 'Python', 'C#'];
// console.log(myArray);

console.log(typeof myFunction);
