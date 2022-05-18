// forEach, find, filter, some, every, reduce

var courses = ['Java', 'JavaScript', 'C#'];

var courses2 = [
    {id: 1, name: 'Javascript', coin : 0},
    {id: 2, name: 'Java', coin : 200},
    {id: 3, name: 'C#', coin : 300},
    {id: 4, name: 'Python', coin : 400},
    {id: 5, name: 'HTML - CSS', coin : 0},
    {id: 6, name: 'HTML - CSS', coin : 50},
];

// 1.For each course
courses.forEach(( course, index, array ) => {
    // console.log(`${course} - ${index} - ${array}`);
})
// console.log(Array.prototype)

// Find: trả về phần tử đầu tiên khi thoả mãn điều kiện, return object

// 2. Filter: trả về tất cả các element thoả mãn điều kiện, return array
var filterCoins = courses2.filter((course2, index, array) => {
    return course2.coin > 200;
});
// console.log(filterCoins)
/* XÂY DỰNG 1 HÀM TRONG PROTOTYPE 
    Array.prototype.filter2 = function(callback) {
        for (var index in this)
        {
            if(this.hasOwnProperty(index)) {
                callback(this[index], index, this);
            }
        }
    }

*/
// hasOwnProperty(index)
// value type: tham trị, reference value: tham chiếu

// 3. Some: Kiểm tra TỐI THIỂU 1 phần tử thoả mãn điều kiện, return boolean
var isFree = courses2.some(function(course2, index, array) { return course2.coin == 0});
// console.log(isFree);

// 4. Every:Kiểm tra TẤT CẢ phải thoả mãn điều kiện, return boolean
var isFree = courses2.every(function(course2, index, array) { return course2.coin == 0});
console.log(isFree);



