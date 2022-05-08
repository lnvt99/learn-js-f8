/*
    1. Declaration function: có thể gọi trước khi được định nghĩa
    2. Expression function: không thể gọi khi chưa được định nghĩa
    3. Arrow function
*/

// 1. Declaration function
showMessage();
function showMessage() {console.log('Declaration function')};

// 2. Expression function
var showMessage2 = function testMsg(){};
setTimeout(function testMsg(){});
var myObj = { myFucntion: function testMsg(){}};

//  3. Arrow function
