// Destructuring 
var array = ['JavaScript', 'Java', 'C#', 'Python'];
var array2 = [1,2,3];
var [a,b,c] = array;
var [d,,f] = array2;
// console.log(a,b,c);
// console.log(d,f);

var course = {
    name: 'JavaScript',
    price: 1999,
    status: true,
    childrenObj: {
        name: 'ReactJS'
    }
}
var {name, price} = course;
var {name,...newCourse} = course;
var {name: parentName, childrenObj: {name: childrenName}} = course;
var {name, description = 'default description'} = course;
// console.log(name, price);
// console.log(parentName);
// console.log(childrenName);
// console.log(description);

// Rest parameter
var [a,...rest] = array;
// console.log(rest);

function logger(...params) {
    console.log(params) // Trả về là 1 giá trị mảng
}

logger(1,2,3,4,5)