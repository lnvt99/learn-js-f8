/*  
    1. Var / Let, Const: Scope, Hosting
    2. Const / Var, Let: Assignment
Code thuần: var
Babel: const, let
Khi định nghĩa biến và không gán lại biến đó: const
Khi cần gán lại giá trị cho biến: let, var
*/

// 1. Code block: {} - Scope
{
    var course = 'JavaScript Basic';
    // let course1 = 'JavaScript Basic';
    // const course2 = 'JavaScript Basic';
}
console.log(course);

// 1. Hosting: gán giá trị trước được, khai báo sau
a = 100;
var a;
console.log(a);

// 2. Assignment
const az = 100;
// a = 5;
console.log(a);