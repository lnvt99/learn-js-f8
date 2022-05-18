/* 
    Array methods:
1. forEach(): duyệt qua các phần tử của mảng
2. every(): kiểm tra tất cả các phần tử thuộc 1 mảng 
            thoả mãn 1 điều kiện - return boolean
3. some(): ngược lại với every()
4. find(): kiểm tra từng phần tử,return là 1 object, 
           không trùng lại phần tử 
5. filter(): giống find nhưng lấy trùng phần tử, return array
6. map(): 
7. reduce()
*/

var courses = [
    {id: 1, name: 'Javascript', coin : 0},
    {id: 2, name: 'Java', coin : 200},
    {id: 3, name: 'C#', coin : 300},
    {id: 4, name: 'Python', coin : 400},
    {id: 5, name: 'HTML - CSS', coin : 0},
    {id: 6, name: 'HTML - CSS', coin : 50},
];

// 1. forEach()
// courses.forEach(( course, index) => {
//     console.log(index, course);
// });

// 2. every()
// var isFree = courses.every(( course, index) => {
//     return course.coin === 0;
// });
// console.log(isFree)

// 3. some()
// var isFree = courses.some(( course, index) => {
//     return course.coin === 0;
// });
// console.log(isFree)

// 4. find()
// var courseFind = courses.find(( course, index) => {
//     return course.name === 'C#';
// });
// console.log(courseFind)

// 5. filter()
var listCourses = courses.filter(( course, index) => {
    return course.name === 'HTML - CSS';
});
console.log(courseFind)