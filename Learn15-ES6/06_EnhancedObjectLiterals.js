// Enhanced Object Literals
/*
1. Định nghĩa key: value cho object
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến
*/

var name = 'JavaScript';
var price = 1000;

// Khi cùng element trong obj thì chỉ ghi 1 element.
var course = {
    name,
    price,
    getName() {
        return name;
    }
};

var fieldName = 'name';
var fieldPrice = 'price';
const course2 = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 9999
};
console.log(course2)
