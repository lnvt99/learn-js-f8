/* 
    NUMBER
*/

var year = 2022;
var PI = 3.14;
var otherNumber = new Number(19);

// NaN: kiểu dữ liệu đại diện số không hợp lệ
var result = 20 / 'ABC';
console.log(isNaN(result))

// Keyword: JavaScript number method
console.log(PI.toString());
console.log(PI.toFixed()); // Trả về kiểu dữ liệu string

console.log(Number.isFinite(PI))