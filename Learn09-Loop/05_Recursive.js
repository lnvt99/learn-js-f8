// Recursive
/*
    1. Xác định điểm dừng
    2. Logic Handle
*/
var array = ['a', 'b', 'c','a', 'b', 'c'];
console.log(new Set(array))

function Recursive(num) {
    if( num == 0 ) return num;
    console.log(num)
    Recursive(num - 1);
}
Recursive(3);

function giaiThua(number) {
    if (number > 0) return number * giaiThua(number -1);
    return 1;
}
console.log(giaiThua(6))

// A -> Loop -> CPU
// A -> Recursive -> RAM