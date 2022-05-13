/* 
    WHILE
4. while: Lặp khi điều kiện đúng
5. do/while: Lặp ít nhất 1 lần, sau đó lặp lại khi điều kiện đúng
*/

// 4. WHILE
var myArr = ['JavaScript', 'Java', 'Python', 'C#'];

var i = 0;
// while ( i < myArr.length) {
//     console.log(myArr[i]);
//     i++;
// }

// 5. DO..WHILE
var i = 0;
var isSuccess = false;
do {
    i++;
    console.log('Nạp thẻ lần ' + i);
    if ( true ) { isSuccess = true };
} while ( !isSuccess && i < 3);

