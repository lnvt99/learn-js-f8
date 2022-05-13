/*
    Vòng lặp - Loop
1. for: Lặp với điều kiện đúng
2. for/in: Lặp qua key của đối tượng
3. for/of: Lặp qua value của đối tượng
*/

// 1. FOR
// for (let index = 0; index < 10; index++) {
    // console.log(index);    
// }

var myStr = 'JavascriptBasic';

var myArr = ['JavaScript', 'Java', 'Python', 'C#'];
// for (let index = 0; index < myArr.length; index++) {
    // console.log(myArr[index]);
// }

// 2. FOR IN
var myInfo = {
    name: 'JavaScript',
    age: 23,
    address: 'VN'
}
// for (var key in myInfo) {
    // console.log(key)
    // console.log(myInfo[key])
// }

// for (const key in myArr) {
    // console.log(myArr[key])
// }

// for (const key in myStr) {
    // console.log(myStr[key])
// }

// 3. FOR OF
// for(var value of myArr)
// {
    // console.log(value)
// }

// for(var value of myStr)
// {
    // console.log(value)
// }

// console.log(Object.keys(myInfo))
// console.log(Object.values(myInfo));

