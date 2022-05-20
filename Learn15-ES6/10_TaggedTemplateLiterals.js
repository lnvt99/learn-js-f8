// Tagged template literals
function highlight(...rest) {
    console.log(rest) // Trả về là 1 giá trị mảng
}

var brand = 'F8';
var course = 'JavaScript';

highlight(`Học lập trình ${course} tại ${brand}`)